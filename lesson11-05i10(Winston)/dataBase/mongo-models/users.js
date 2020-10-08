const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = model('users', UserSchema);
