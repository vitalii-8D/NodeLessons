const express = require('express');
const path = require('path');
const {carRouter} = require('./routers')

app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.use('/cars', carRouter);



app.listen(5000, (err) => {
    if (err) {
        console.log(err);
    }
    console.log('Server is starting on port 5000');
})
