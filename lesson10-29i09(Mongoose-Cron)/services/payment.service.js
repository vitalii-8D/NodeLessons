const PaymentModel = require('../dataBase/mongo-models/payment');

class PaymentService {
    getAllPayments() {
        return PaymentModel.find({})
    }
    createPayment(objectToCreate) {
        return new PaymentModel(objectToCreate).save();
    }
    deleteById(id) {
        return PaymentModel.findByIdAndDelete(id)
    }
}
