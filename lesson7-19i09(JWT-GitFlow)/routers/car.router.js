const {Router} = require('express');
const carRouter = Router();

const {carMiddleware, tokenMiddleware} = require('../middlewares');
const {carController} = require('../controllers');

carRouter.get('/', carController.getAllCars);
carRouter.post('/', tokenMiddleware.ckeckTokenAccess, carController.addCar);
carRouter.delete('/:id', carController.deleteCar);
carRouter.get('/:id', carController.getOneCar);
carRouter.put('/:id', carController.updateCar);

module.exports = carRouter;
