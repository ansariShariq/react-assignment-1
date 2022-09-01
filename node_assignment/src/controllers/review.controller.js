const Review = require('../models/review.model')
const express = require('express')
const router = express.Router()


// Create Review
router.post('/',async(req,res)=>{
    try{
        const review = await Review.create(req.body)
        console.log(review)
        res.status(200).send(review)
    }
    catch(err){
        console.log(err)
        res.status(500).send({meassage:err.meassage})
    }
})
//Delete all Review

router.delete('/:id',async(req,res)=>{
    try{
        const review = await Review.findOneAndDelete(req.params.id)
        console.log(review)
        res.status(200).send(review)
    }
    catch(err){
        console.log(err)
        res.status(500).send({meassage:err.meassage})
    }
})
// Virtual populating the reviews (all the reviews on a single Product with user Details)
router.get('/product/:id',async(req,res)=>{
    try{
        const reviews = await Review.find({productId:req.params.id}).populate({path:"productId"}).lean().exec() //.populate([{path:'userId'}])
        console.log(reviews)
        res.status(200).send(reviews)
    }
    catch(err){
        console.log(err)
        res.status(500).send({meassage:err.meassage})
    }
})

//Read All review
router.get('/',async(req,res)=>{
    try{
        const reviews = await Review.find().lean().exec() //.populate([{path:'userId'}])
        console.log(reviews)
        res.status(200).send(reviews)
    }
    catch(err){
        console.log(err)
        res.status(500).send({meassage:err.meassage})
    }
})
module.exports = router