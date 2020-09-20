const {Router} = require("express");
const authRouter = Router();

const {authController} = require('../controllers');
const {userMiddleware} = require('../middlewares');

authRouter.post('/', userMiddleware.isUserPresent, authController.login);

module.exports = authRouter;
