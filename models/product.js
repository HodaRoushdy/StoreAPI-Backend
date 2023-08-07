const mongoose = require('mongoose')

const productModel = new mongoose.Schema({
    name:{
        type:String,
        required :[true,'u must enter a name']
    },
    price:{
        type:Number,
        required :[true,'u must enter a price']
    },
    company:{
        type:String,
        enum:{
            values:['ikea', 'liddy' ,'caressa' , 'marcos'],
            message:'{VALUES} is not supported'
        }
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    featured:{
        type:Boolean,
        default:false
    },
    rating:{
        type:Number,
        default:4.5
    },
}) 

module.exports= mongoose.model('productModel',productModel)