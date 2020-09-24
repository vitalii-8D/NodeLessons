const {Router} = require("express");
const authRouter = Router();

const {authController} = require('../controllers');
const {userMiddleware, tokenMiddleware} = require('../middlewares');

// TODO If the user already logged in, do log out
authRouter.post('/', userMiddleware.isUserPresent, tokenMiddleware.isUserAlreadyLoggedIn, authController.login);
authRouter.post('/refresh', tokenMiddleware.ckeckTokenRefresh, authController.refreshToken);
// authRouter.post('/logout', authController.logout);

module.exports = authRouter;
