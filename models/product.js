const mongoose = require('mongoose');

const prodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type:Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        lowercase: true,
        enum: ['t-shirts', 'pants', 'hoodies']
    }
})

const Product = mongoose.model('Product', prodSchema);

module.exports = Product;