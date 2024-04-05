
const Product = require('../models/Product');

const getProduct =async(req,res)=>{
    const productList = await Product.find();
    return res.status(200).json({message:productList});
}

const menProducts = async(req,res)=>{
    const productList = await Product.find({gender:'male'});
    return res.status(200).json({message:productList});
}

const womenProducts = async(req,res)=>{
    const productList = await Product.find({gender:'female'});
    return res.status(200).json({message:productList});
}

module.exports = {getProduct,menProducts,womenProducts};
