const {Router} = require('express');
const carRouter = Router();
const { ACCESS_TOKEN_SECRET } = require('../configs/config');

const {carMiddleware, tokenMiddleware} = require('../middlewares');
const {carController} = require('../controllers');

carRouter.get('/', carController.getAllCars);
carRouter.post('/', /*tokenMiddleware.ckeckTokenAccess,*/ tokenMiddleware.checkToken('access_token', ACCESS_TOKEN_SECRET), carController.addCar);
carRouter.delete('/:id', carController.deleteCar);
carRouter.get('/:id', carController.getOneCar);
carRouter.put('/:id', carController.updateCar);

module.exports = carRouter;
