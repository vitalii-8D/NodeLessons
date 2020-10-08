const {Router} = require('express');
const apiRouter = Router();

const {carRouter, userRouter, authRouter, paymentRouter, mongoRouter} = require('../routers');

apiRouter.use('/cars', carRouter);
apiRouter.use('/users', userRouter);
apiRouter.use('/auth', authRouter);
apiRouter.use('/pay', paymentRouter);
apiRouter.use('/mongo', mongoRouter);

module.exports = apiRouter;
