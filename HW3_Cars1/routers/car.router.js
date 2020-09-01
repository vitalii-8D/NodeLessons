const {Router} = require('express');
const carRouter = Router();

const {carController} = require('../controllers');
const {carMiddleware} = require('../middlewares');

carRouter.get('/', carMiddleware.isArrayEmpty, carController.getAllCars);
carRouter.post('/', carController.addCar);
carRouter.delete('/:id', carMiddleware.isArrayEmpty, carMiddleware.isIdPresent, carController.deleteCar);
carRouter.get('/:id', carController.getOneCar);
carRouter.put('/:id', carController.updateCar);

module.exports = carRouter;
