const express = require('express')
const cors = require("cors")
const mongoose = require('mongoose')



const app = express()

const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())


mongoose.connect('mongodb://localhost/naijahack')

mongoose.connection.once('open', () => console.log('MongoDb database connection established Successfully')
).on('error', err => console.log('Connection error', err))


const memberRouter = require('./route/memberRoute')

app.use('/members', memberRouter)



app.listen(port, () => {
    console.log(`App is running on PORT: ${port}`)
})