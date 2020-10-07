const {paymentService} = require('../services');

class PaymentController {
    async getAll(req, res, next) {
        try {
            const allPayments = paymentService.getAllPayments();

            res.json(allPayments);
        } catch (e) {
            next(e)
        }
    }
    async createPayment(req, res, next) {
        try {
            const newPayment = await paymentService.createPayment(req.body);

            res.json(newPayment);
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new PaymentController();
