const mongoose = require('mongoose')
require('dotenv').config()
const connect = ()=>{
   
    return mongoose.connect(`mongodb+srv://shariq_ansari:${process.env.PASSWORD}.@cluster0.kvpqg.mongodb.net/ecom`)
}
module.exports = connect