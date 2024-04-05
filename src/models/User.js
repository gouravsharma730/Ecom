const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    "userName":{type:String,required:true},
    "email":{type:String,required:true},
    "password":{type:String,required:true},
    "phoneNumber":String,
    "address":{
        "country":String,
        "state":String,
        "city":String,
        "locality":String,
        "pincode":String
    },
    "cart":[{type:Object},{quantity:Number}]
})

module.exports = mongoose.model('User',userSchema);