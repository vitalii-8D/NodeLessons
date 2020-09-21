const {Router} = require("express");
const authRouter = Router();

const {authController} = require('../controllers');
const {userMiddleware, tokenMiddleware} = require('../middlewares');

authRouter.post('/', userMiddleware.isUserPresent, authController.login);
authRouter.post('/refresh', tokenMiddleware.ckeckTokenRefresh, authController.refreshToken);

module.exports = authRouter;
