const {Router} = require('express');
const apiRouter = Router();

const {carRouter, userRouter} = require('../routers');

apiRouter.use('/cars', carRouter);
apiRouter.use('/users', userRouter);

module.exports = apiRouter;
