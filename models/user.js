const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minLength: 2,
    },

    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    profileImage: {
        type: String,
    },
    address: {
        street: String,
        city: String,
        zipCode: Number,
    },
    rememberMe: Boolean,
});

const UserModel = new mongoose.model('user', userSchema);
module.exports = UserModel;
