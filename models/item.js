
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: {type: String, required: true},
    image: {type: String, required: true},
    sku: {type: String, required: true},
    color: {type: String, required: false},
    quantity: {type: Number, required: false},
    inStock: {type: Boolean, required: true},
})

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
