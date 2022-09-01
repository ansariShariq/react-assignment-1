const Product = require('../models/product.model')
const express = require('express')
const router = express.Router()
//Add Products

router.post('/',async(req,res)=>{
    try{
        const product = await Product.create(req.body)
        console.log(product)
        res.status(200).send(product)
    }
    catch(err){
        console.log(err)
        res.status(500).send({meassage:err.meassage})
    }
})

//Read all the products
router.get('/',async(req,res)=>{
    try{
        const products = await Product.find().lean().exec()
        console.log(products)
        res.status(200).send(products)
    }
    catch(err){
        console.log(err)
        res.status(500).send({meassage:err.meassage})
    }
})

// Read Products By Id
router.get('/:id',async(req,res)=>{
    try{
        const products = await Product.findById(req.params.id).lean().exec()
        console.log(products)
        res.status(200).send(products)
    }
    catch(err){
        console.log(err)
        res.status(500).send({meassage:err.meassage})
    }
})

// Update Products By Id
router.patch('/:id',async(req,res)=>{
    try{
        const product = await Product.findByIdAndUpdate(req.params.id,req.body,{new :true})
        console.log(product)
        res.status(200).send(product)
    }
    catch(err){
        console.log(err)
        res.status(500).send({message:err.meassage})
    }
})

router.delete('/:id',async(req,res)=>{
    try{
        const product = await Product.findByIdAndDelete(req.params.id)
        console.log(product)
        res.status(200).send(product)
    }
    catch(err){
        console.log(err)
        res.status(500).send({message:err.meassage})
    }
})





module.exports = router