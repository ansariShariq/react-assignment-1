const mongoose = require('mongoose')
const reviewSchema =new mongoose.Schema({
    description:{type:String,required:true},
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'product',
        required:true
    }
},{
    timestamps:true,
    versionKey:false
})

const Review = mongoose.model('review',reviewSchema)
module.exports = Review