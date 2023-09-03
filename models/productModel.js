const mongoose = require('mongoose')
const Object2 = Object

const productSchema = new mongoose.Schema({
    product_id:{
        type: String,
        unique: true,
        trim: true,
        required: false
    },
    title:{
        type: String,
        trim: true,
        required: true
    },
    price:{
        type: Number,
        trim: true,
        required: true
    },
    shipping: {
        type: Number,
        trim: true,
        required: false,
        default: 15
       
    },
    description:{
        type: String,
        required: true
    },
    
    images:{
        type: Object,
        required: true
    },

    images2:{
        type: Object2,
        required: true
    },
   
    category:{
        type: String,
        required: true
    },
    checked:{
        type: Boolean,
        default: false
    },
    sold:{
        type: Number,
        default: 1
    }
}, {
    timestamps: true //important
})


module.exports = mongoose.model("Products", productSchema)