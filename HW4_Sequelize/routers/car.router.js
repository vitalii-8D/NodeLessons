const {Router} = require('express');
const carRouter = Router();

const {carController} = require('../controllers');
const {carMiddleware} = require('../middlewares');

carRouter.get('/', carController.getAllCars);
carRouter.post('/', carMiddleware.carValidator, carController.addCar);
carRouter.delete('/:id', carController.deleteCar);
carRouter.get('/:id', carController.getOneCar);
carRouter.put('/:id', carController.updateCar);

module.exports = carRouter;
