const {Payments} = require('../dataBase/mongo-models');

class PaymentService {
    getAllPayments() {
        return Payment.find({})
    }
    createPayment(objectToCreate) {
        return new Payment(objectToCreate).save();
    }
    deleteById(id) {
        return Payment.findByIdAndDelete(id)
    }


}

module.exports = new PaymentService();
