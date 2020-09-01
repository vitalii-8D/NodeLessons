const {Router} = require('express');
const userRouter = Router();

const {userController} = require('../controllers');
const {userMiddleware} = require('../middlewares');

userRouter.get('/', userMiddleware.isArrayEmpty, userController.getAllUsers);
userRouter.post('/', userController.addUser);
userRouter.get('/:id', userMiddleware.isArrayEmpty, userMiddleware.isIdPresent,  userController.getOneUser);
userRouter.delete('/:id', userMiddleware.isArrayEmpty, userMiddleware.isIdPresent,  userController.deleteUser);
userRouter.put('/:id', userMiddleware.isArrayEmpty, userMiddleware.isIdPresent, userMiddleware.isPropertiesPresent,  userController.updateUser);
userRouter.get('/:id/cars', userMiddleware.isArrayEmpty, userMiddleware.isIdPresent, userMiddleware.isUserHasCars,  userController.getCarsOfUser);
// userRouter.post('/:id/cars', userMiddleware.isArrayEmpty, userMiddleware.isIdPresent,  userController.getCarsOfUser);

module.exports = userRouter;
