const express = require('express');
const {sequelize} = require('./dataBase/models');
const apiRouter = require('./routers/api.router');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api', apiRouter);

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
