const express = require('express');
const app = express();
const port = 3000;
require('../config/db');

const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product');
app.use(express.json());

app.use('/user',userRoutes);
app.use('/products',productRoutes);

app.listen(port,()=>{
    console.log(`Listening to port ${port}`)
})