const {Router} = require('express');
const apiRouter = Router();

const {carRouter, userRouter, authRouter} = require('../routers');

apiRouter.use('/cars', carRouter);
apiRouter.use('/users', userRouter);
apiRouter.use('/auth', authRouter);

module.exports = apiRouter;
