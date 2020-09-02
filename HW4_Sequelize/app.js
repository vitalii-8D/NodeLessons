const express = require('express');
const {carRouter, userRouter} = require('./routers');
app = express();

//  Тут витягуємо файл бази, дістаємо Instance та встановлюємо моделі
const instance = require('./dataBase').getInstance();
instance.setModels();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/cars', carRouter);
app.use('/users', userRouter);

app.listen(5000, (err) => {
    if (err) {
        console.log(err);
    }
    console.log('Server is starting on port 5000');
})
