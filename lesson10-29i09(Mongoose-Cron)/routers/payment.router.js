const { Router } = require('express');
const paymentRouter = Router();

const { paymentController } = require('../controllers');

paymentRouter.get('/', paymentController.getAll);
paymentRouter.post('/', paymentController.createPayment);


module.exports = paymentRouter;
