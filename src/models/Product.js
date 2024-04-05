const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:String,
    description:String,
    material:String,
    productCode:String,
    rating:String,
    specification:[{sleeveLength:String},{fit:String},{patternType:String},{length:String}],
    category:[{color:String},{size:String},{price:String}],
    gender:String
})

module.exports = mongoose.model('Product',productSchema);