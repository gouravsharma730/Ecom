const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Ecom',{useNewUrlParser:true,useUnifiedTopology:true});

const db = mongoose.connection;
db.on('error',()=>console.log('MongoDB Connection failed!'));
db.on('open',()=>console.log('MongoDB is connected successfully.'));

module.exports = db;