const fakeProducts = [
    {
      name: "Cotton T-Shirt",
      description: "Comfortable cotton t-shirt for everyday wear",
      material: "Cotton",
      productCode: "TS001",
      rating: "4.5",
      specification: {
       sleeveLength: "Short Sleeve" ,
       fit: "Regular Fit" ,
       patternType: "Solid" ,
       length: "Regular Length" 
      },
      category: {
       color: "Black",
       size: "M" ,
       price: "$12.99",
       availableQuantity: 100
      },
      gender: "Male"
    },
    {
      name: "Summer Dress",
      description: "Lightweight summer dress perfect for hot days",
      material: "Polyester",
      productCode: "SD002",
      rating: "4.2",
      specification: {
       sleeveLength: "Sleeveless" ,
       fit: "Loose Fit" ,
       patternType: "Floral" ,
       length: "Knee Length" 
      },
      category: {
       color: "Blue" ,
       size: "S" ,
       price: "$24.99" ,
       availableQuantity: 50 
      },
      gender: "Female"
    },
    {
      name: "Hooded Sweatshirt",
      description: "Warm and cozy hooded sweatshirt for cold weather",
      material: "Fleece",
      productCode: "HS003",
      rating: "4.8",
      specification: {
       sleeveLength: "Long Sleeve" ,
       fit: "Relaxed Fit" ,
       patternType: "Solid" ,
       length: "Regular Length" 
      },
      category: {
       color: "Gray" ,
       size: "L" ,
       price: "$29.99" ,
       availableQuantity: 75 
      },
      gender: "Unisex"
    },
    // Add more fake data here
    {
      name: "Leather Jacket",
      description: "Stylish leather jacket for a bold fashion statement",
      material: "Leather",
      productCode: "LJ004",
      rating: "4.4",
      specification: {
       sleeveLength: "Long Sleeve" ,
       fit: "Slim Fit" ,
       patternType: "Solid" ,
       length: "Hip Length" 
      },
      category: {
       color: "Brown" ,
       size: "M" ,
       price: "$89.99" ,
       availableQuantity: 30 
      },
      gender: "Male"
    },
    {
      name: "Denim Jeans",
      description: "Classic denim jeans for a timeless look",
      material: "Denim",
      productCode: "DJ005",
      rating: "4.6",
      specification: {
       sleeveLength: "N/A" ,
       fit: "Slim Fit" ,
       patternType: "Solid" ,
       length: "Ankle Length" 
      },
      category: {
       color: "Blue" ,
       size: "S" ,
       price: "$39.99" ,
       availableQuantity: 60 
      },
      gender: "Female"
    },
    {
      name: "Running Shoes",
      description: "Lightweight and breathable running shoes for sports activities",
      material: "Mesh",
      productCode: "RS006",
      rating: "4.7",
      specification: {
       sleeveLength: "N/A" ,
       fit: "Regular Fit" ,
       patternType: "Solid" ,
       length: "N/A" 
      },
      category: {
       color: "Red" ,
       size: "9" ,
       price: "$59.99" ,
       availableQuantity: 40 
      },
      gender: "Unisex"
    },
    {
      name: "Striped Polo Shirt",
      description: "Classic striped polo shirt for casual outings",
      material: "Cotton",
      productCode: "PS007",
      rating: "4.3",
      specification: {
       sleeveLength: "Short Sleeve" ,
       fit: "Regular Fit" ,
       patternType: "Striped" ,
       length: "Regular Length" 
      },
      category: {
       color: "Green" ,
       size: "L" ,
       price: "$19.99" ,
       availableQuantity: 80 
      },
      gender: "Male"
    },
    {
      name: "Maxi Dress",
      description: "Elegant maxi dress for special occasions",
      material: "Chiffon",
      productCode: "MD008",
      rating: "4.9",
      specification: {
       sleeveLength: "Short Sleeve" ,
       fit: "Slim Fit" ,
       patternType: "Solid" ,
       length: "Floor Length" 
      },
      category: {
       color: "Purple" ,
       size: "M" ,
       price: "$49.99" ,
       availableQuantity: 25 
      },
      gender: "Female"
    },
    {
      name: "Track Pants",
      description: "Comfortable track pants for workouts and lounging",
      material: "Cotton Blend",
      productCode: "TP009",
      rating: "4.6",
      specification: {
       sleeveLength: "N/A" ,
       fit: "Regular Fit" ,
       patternType: "Solid" ,
       length: "Ankle Length" 
      },
      category: {
       color: "Gray" ,
       size: "XL" ,
       price: "$29.99" ,
       availableQuantity: 55 
      },
      gender: "Unisex"
    },
    {
      name: "V-Neck Sweater",
      description: "Classic v-neck sweater for layering in cold weather",
      material: "Wool",
      productCode: "VS010",
      rating: "4.7",
      specification: {
       sleeveLength: "Long Sleeve" ,
       fit: "Regular Fit" ,
       patternType: "Solid" ,
       length: "Hip Length" 
      },
      category: {
       color: "Navy Blue" ,
       size: "M" ,
       price: "$34.99" ,
       availableQuantity: 70 
      },
      gender: "Male"
    },
    {
      name: "Casual Shirt",
      description: "Versatile casual shirt for everyday wear",
      material: "Cotton",
      productCode: "CS011",
      rating: "4.2",
      specification: {
       sleeveLength: "Long Sleeve" ,
       fit: "Regular Fit" ,
       patternType: "Checkered" ,
       length: "Regular Length" 
      },
      category: {
       color: "Red" ,
       size: "S" ,
       price: "$22.99" ,
       availableQuantity: 90 
      },
      gender: "Male"
    },
    {
      name: "Printed Skirt",
      description: "Fashionable printed skirt for a chic look",
      material: "Polyester",
      productCode: "PS012",
      rating: "4.4",
      specification: {
       sleeveLength: "N/A" ,
       fit: "Slim Fit" ,
       patternType: "Printed" ,
       length: "Knee Length" 
      },
      category: {
       color: "Pink" ,
       size: "M" ,
       price: "$19.99" ,
       availableQuantity: 40 
      },
      gender: "Female"
    },
    {
      name: "Hiking Boots",
      description: "Sturdy hiking boots for outdoor adventures",
      material: "Leather",
      productCode: "HB013",
      rating: "4.9",
      specification: {
       sleeveLength: "N/A" ,
       fit: "Regular Fit" ,
       patternType: "Solid" ,
       length: "Ankle Length" 
      },
      category: {
       color: "Brown" ,
       size: "8" ,
       price: "$79.99" ,
       availableQuantity: 35 
      },
      gender: "Unisex"
    },
    {
      name: "Puffer Jacket",
      description: "Warm and stylish puffer jacket for cold climates",
      material: "Nylon",
      productCode: "PJ014",
      rating: "4.7",
      specification: {
       sleeveLength: "Long Sleeve" ,
       fit: "Slim Fit" ,
       patternType: "Solid" ,
       length: "Hip Length" 
      },
      category: {
       color: "Black" ,
       size: "L" ,
       price: "$59.99" ,
       availableQuantity: 60 
      },
      gender: "Male"
    },
    {
      name: "Wrap Dress",
      description: "Flattering wrap dress for a feminine silhouette",
      material: "Jersey",
      productCode: "WD015",
      rating: "4.6",
      specification: {
       sleeveLength: "Short Sleeve" ,
       fit: "Slim Fit" ,
       patternType: "Solid" ,
       length: "Knee Length" 
      },
      category: {
       color: "Red" ,
       size: "M" ,
       price: "$39.99" ,
       availableQuantity: 45 
      },
      gender: "Female"
    }
  ];
  module.exports = fakeProducts;
  