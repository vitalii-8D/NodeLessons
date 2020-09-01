const {Router} = require('express');

const userRouter = Router();

const controller = require('../controllers/user.controller')
const {checkUserValidity} = require('../middlewares/user');

userRouter.get('/', controller.getAllUsers());

userRouter.post('/', checkUserValidity, controller.createUser());

module.exports = userRouter;
