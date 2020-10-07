const { Schema, model } = require('mongoose');

const logsSubSchema = {
    // username: String,
    username: {
        type: String
    },
    email: {
        type: String
    }
}

const PaymentSchema = new Schema({
    currency: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    logs: [logsSubSchema]
})

module.exports = model('payments', PaymentSchema);
