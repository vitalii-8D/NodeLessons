const express = require('express');
const {sequelize} = require('./dataBase/models');
const apiRouter = require('./routers/api.router');
const dotenv = require('dotenv');

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

dotenv.config();

app.use('/api', apiRouter);

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
