require('dotenv').config()
const productModel = require('./models/product')
const connectDB = require('./db/connect')
const productJson = require('./products.json')

const start = async()=>{
try {
    await connectDB(process.env.MONGO_URI)
    await productModel.deleteMany()
    await productModel.create(productJson)
    console.log('success')
    process.exit(0)
} catch (error) {
    console.log(error)
    process.exit(1)
}
}
start()