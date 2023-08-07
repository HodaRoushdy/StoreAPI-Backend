require('dotenv').config()
require('express-async-errors')
const express = require('express')
const app= express()
const productRoutes = require('./routes/products')
const errorHandler = require('./middleware/error-handler')
const notFound = require('./middleware/not-found')
const connectDB = require('./db/connect')
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('hello')
})

app.use('/api/products',productRoutes)

app.use(errorHandler)
app.use(notFound)




const port = process.env.PORT

const start =async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`app listening on port : ${port}`)
        )
    } catch (error) {
        console.log(error)
    }
}
start()