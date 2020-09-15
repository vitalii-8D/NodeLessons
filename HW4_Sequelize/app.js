const express = require('express');
const {carRouter, userRouter} = require('./routers');
const app = express();

//  Тут витягуємо файл бази, дістаємо Instance та встановлюємо моделі
// Тут Віті код з лекції
/*const instance = require('./dataBase').getInstance();
instance.setModels();*/
// А тут новий від Паші
const sequelize = require('./dataBase/configs');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/cars', carRouter);
app.use('/users', userRouter);

sequelize
    .sync({alter: true})
    .then(() => {
        app.listen(5000, (err) => {
            if (err) {
                console.log(err);
            }
            console.log('Server is starting on port 5000');
        })
    })
    .catch(error => {
        console.log(error);
    })
