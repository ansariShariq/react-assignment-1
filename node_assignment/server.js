const connect = require('./src/config/db')
const userController = require('./src/controllers/user.controller')
const productController = require('./src/controllers/product.controller')
const reviewController = require('./src/controllers/review.controller')
const express = require('express')

// const connect = require('./config/db')
const app =express()
app.use(express.json())
require('dotenv').config()
app.use("/users",userController)
app.use("/products",productController)
app.use("/reviews",reviewController)



const start = async()=>{
    await connect()
    const Port = process.env.PORT || 5000
    app.listen(Port,()=>{
        console.log('listening at port 5000')
    })
}
module.exports = start