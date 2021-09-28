const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { isEmail } = require('validator');

const UserSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        min: [14, 'Must be 14 years of age']
    },
    email: {
        type: String,
        required: [true,  'Enter email address'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Enter valid email']
    },
    password: {
        type: String,
        required: [true, 'Enter valid password'],
        minlength: [6, 'Minimum password length: 6 characters']
    },
    register_date: {
        type: Date,
        default: Date.now
    }
})

module.exports = User = mongoose.model('user', UserSchema);