const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    location: [{
        country: {
            type: String,
        },
        city: {
            type: String,
        },
        address: {
            type: String,
        }
    }],
    price: {
        type: Number,
        required: true
    },
    date_added: {
        type: Date,
        default: Date.now
    }
});

module.exports = Item = mongoose.model('item', ItemSchema);