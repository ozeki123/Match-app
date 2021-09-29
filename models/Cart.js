const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new Schema ({
    //ID of user who is owner of cart
    user_id: {
        type: String
    },
    items: [{
        product_id: {
            type: String
        },
        name: String,
        quantity: {
            type: Number,
            required: true,
            min: [1, 'There must be more than 1 item in the cart'],
            default: 1
        },
        price: Number
    }],
    total_price: {
        type: Number, 
        required: true,
        default: 0
        
    }
});

module.exports = Cart = mongoose.model('cart', Schema);