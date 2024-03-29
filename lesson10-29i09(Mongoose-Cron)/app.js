const express = require('express');
const { sequelize } = require('./dataBase/models');
const fileUpload = require('express-fileupload');
const apiRouter = require('./routers/api.router');
const path = require('path');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const { cronRunDone } = require('./cron-jobs');
const cors = require('cors');
const { WHITE_LIST, ENV } = require('./configs/config');

dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload({}));
app.use('/api', apiRouter);
app.use(express.static(path.join(process.cwd(), 'public')));

if (ENV === 'DEV' ) {
    app.use(cors())
} else {
    app.use(cors({
        origin: (origin, callback) => {
            if ( WHITE_LIST.split(';').includes(origin) ) {
                callback(null, true)
            } else {
                callback(new Error('Not allowd by CORS'))
            }
        }
    }))
}

app.use('*', async (err, req, res, next) => {
    await res.status(err.status || 404)
        .json({
            message: err.message || 'PAGE NOT FOOUND',
            code: err.customCode || ''
        })
})

// Підключення
mongoose.connect(encodeURI('mongodb://localhost/car_shop'), { useNewUrlParser: true });
const db = mongoose.connection;
// У Віті на проекті
// db.on('error', console.error.bind)
db.on('error', (args) => {
    console.log(args);
})

// Підключення app після sequelize
sequelize
    .sync({ alter: true })
    .then(() => {
        app.listen(5000, (err) => {
            if ( err ) {
                console.log(err);
            }
            cronRunDone();
            console.log('Server starting on port: 5000');
        })
    })
    .catch(err => {
        console.log(err);
    })

process.on("unhandledRejection", reason => {
    console.log('--------- reason ---------');
    console.log(reason);
    console.log('--------- reason ---------');

    process.exit(0);
})
