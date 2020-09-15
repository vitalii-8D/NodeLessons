const {Router} = require('express');
const carRouter = Router();

const {carMiddleware} = require('../middlewares');
const {carController} = require('../controllers');

carRouter.get('/', carController.getAllCars);
carRouter.post('/', carMiddleware.carValidator, carController.addCar);
carRouter.delete('/:id', carController.deleteCar);
carRouter.get('/:id', carController.getOneCar);
carRouter.put('/:id', carController.updateCar);

module.exports = carRouter;
