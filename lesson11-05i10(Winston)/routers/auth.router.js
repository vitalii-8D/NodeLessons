const { Router } = require("express");
const authRouter = Router();
const { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } = require('../configs/config');

const { authController } = require('../controllers');
const { userMiddleware, tokenMiddleware } = require('../middlewares');

// TO+DO If the user already logged in, do log out
authRouter.post('/', userMiddleware.isUserPresent, tokenMiddleware.isUserAlreadyLoggedIn, authController.login);
authRouter.post('/refresh', /*tokenMiddleware.ckeckTokenRefresh,*/ tokenMiddleware.checkToken('refresh_token', REFRESH_TOKEN_SECRET), authController.refreshToken);
// authRouter.post('/logout', authController.logout);

module.exports = authRouter;
