const express = require('express');
const {sequelize} = require('./dataBase/models');
const fileUpload = require('express-fileupload');
const apiRouter = require('./routers/api.router');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(fileUpload({}));
app.use('/api', apiRouter);
app.use(express.static(path.join(process.cwd(), 'public')));

app.use('*', async (err, req, res, next) => {
    await res.status(err.status || 404)
        .json({
            message: err.message || 'PAGE NOT FOOUND',
            code: err.customCode || ''
        })
})

sequelize
.sync({alter: true})
.then(() => {
    app.listen(5000, (err) => {
        if (err) {
            console.log(err);
        }
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
