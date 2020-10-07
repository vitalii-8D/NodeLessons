const { Router } = require('express');
const paymentRouter = Router();

const { mongoController } = require('../controllers');

paymentRouter.get('/users', mongoController.getUsers);
paymentRouter.post('/users', mongoController.createUser);
paymentRouter.get('/cars', mongoController.getCars);
paymentRouter.post('/cars', mongoController.createCar);
paymentRouter.get('/users/:id/cars', mongoController.getUsersCars);

module.exports = paymentRouter;
