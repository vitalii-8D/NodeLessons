const { Schema, model } = require('mongoose');

const CarsSchema = new Schema({
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    userId: {
        type: String,
        ref: 'users'
    }
})

module.exports = model('cars', CarsSchema);
