const mongoose = require('mongoose');
const Review = require('./review');

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        min:0,
        required:true
    },
    desc:{
        type:String
    },
    reviews: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Review' 
        }
    ]
})

const Product = mongoose.model('Product',productSchema);

module.exports = Product;