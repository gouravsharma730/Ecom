
const Product = require('../models/Product');


// const getProduct =async(req,res)=>{
//     const productList = await Product.find();
//     return res.status(200).json({message:productList});
// }
const getProduct =async(req,res)=>{
    try{
        const productList = await Product.aggregate([{
        $project:{
        name:1,
        description:1,
        material:1,
        productCode:1,
        rating:1,
        specification:1,
        category:1,
        gender:1,
        availableQuantity:{
            $cond:{
                if:{$gt:["$category.availableQuantity",0]},
                then:"$category.price",
                else:"Out of stock"
            }
        }
        }
    }
])
const productCount = productList.length;
const response = {productList,productCount};
return res.status(200).json({ message: response });
}catch(err){
  return res.status(500).json({ error: 'Internal Server Error' });
}
}

const menProducts = async(req,res)=>{
    try{
        const productList = await Product.aggregate([
        {
            $match:{
            'gender':'Male'
        }},
        {
            $project:{ 
                name:1,
                description:1,material:1,
                productCode:1,
                rating:1,
                specification:1,
                category:1,
                gender:1,
                availableQuantity:{
                $cond:{
                    if:{$gt:['$category.availableQuantity',0]},
                    then:"$category.price",
                    else:"Out of stock"
                }
            }}
        }
    ])
    const productCount = productList.length;
  const response = {productList,productCount};
  return res.status(200).json({ message: response });
  }catch(err){
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

const womenProducts = async (req, res) => {
  try{const productList = await Product.aggregate([
    {
      $match: {
        gender: "Female",
      },
    },
    {
      $project: {
        name: 1,
        description: 1,
        material: 1,
        productCode: 1,
        rating: 1,
        specification: 1,
        category: 1,
        gender: 1,
        availableQuantity: {
          $cond: {
            if: { $gt: ["$category.availableQuantity", 0] },
            then: "$category.price",
            else: "Out of stock",
          },
        },
      },
    }
  ]);
  const productCount = productList.length;
  const response = {productList,productCount};
  return res.status(200).json({ message: response });
  }catch(err){
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {getProduct,menProducts,womenProducts};






// const fakeData= require('../fakeProducts')
//     const insertFakeData = async()=>{
//         try{
//             const check = await Product.insertMany(fakeData);
//             console.log(check);
//         }catch(err){
//             console.log(err);
//         }
    
//     }
// insertFakeData();