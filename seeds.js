const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/clothing', {useNewUrlParser:true,useUnifiedTopology:true})
    .then(() => {
        console.log("MONGO CONNECTION OPENED");
    })
    .catch(err => {
        console.log("MONGO CONNECTION ERROR");
        console.log(err);
    })

// const prod = new Product({
//     name: 'Adidas T-Shirt',
//     price: 40,
//     category: 't-shirt'
// })    
// prod.save().then(prod => {
//     console.log(prod)
// })
// .catch(e => {
//     console.log(e);
// })

const clothingProducts = [
    {
    name: 'Adidas Hoodie',
    price: 80,
    category: 'hoodies'
    },
    {
    name: 'Adidas Pants',
    price: 20,
    category: 'pants'
    },
    {
    name: 'Cotton Polo T-Shirt',
    price: 30,
    category: 't-shirts'
    },
    {
    name: 'Majolica Collection T-Shirt',
    price: 150,
    category: 't-shirts'
    },
    {
    name: 'Majolica Collection Hoodies',
    price: 250,
    category: 'hoodies'
    },
    {
    name: 'Urban Classics Pants',
    price: 45,
    category: 'pants',
    },
    {
    name: 'Woven Cargo Pants',
    price: 70,
    category: 'pants',
    },
    {
    name: 'Mountain Hoodie',
    price: 170,
    category: 'hoodies',
    }
];

Product.insertMany(clothingProducts)
.then(res => {
    console.log(res);
})
.catch(e => {
    console.log(e);
})