const {Router} = require('express');
const userRouter = Router();

const {userMiddleware} = require('../middlewares');
const {userController} = require('../controllers');

userRouter.get('/', userController.getAllUsers);
userRouter.post('/', userMiddleware.isUserValid, userMiddleware.isUsernameUsed, userController.addUser);
userRouter.delete('/:id', userController.deleteUser);
userRouter.get('/:id', userController.getOneUser);
userRouter.put('/:id', userController.updateUser);
userRouter.get('/:id/cars', userController.getCarsOfUser);
userRouter.post('/:id/cars', userController.getCarsOfUser);

module.exports = userRouter;
