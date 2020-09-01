const {Router} = require('express');
const carRouter = Router();

const {carController} = require('../controllers');
const {carMiddleware} = require('../middlewares');

carRouter.get('/', carMiddleware.isArrayEmpty, carController.getAllCars);
carRouter.post('/', carController.addCar);
carRouter.delete('/:id', carMiddleware.isArrayEmpty, carMiddleware.isIdPresent, carController.deleteCar);
carRouter.get('/:id', carMiddleware.isArrayEmpty, carMiddleware.isIdPresent, carController.getOneCar);
carRouter.put('/:id', carMiddleware.isArrayEmpty, carMiddleware.isIdPresent, carMiddleware.isPropertiesPresent, carController.updateCar);

module.exports = carRouter;
