const express = require('express')
require('dotenv').config()
const cors = require('cors')
const mongoose = require('mongoose')
const router = require('./API/Router/useRouter')

const app = express()
app.use(express.json())  // middleware for handle request-respose
app.use(cors())

const LINK_URL = process.env.URL  // process is global
mongoose.connect(LINK_URL)   // connection of node and mongodb
.then(()=>{
    console.log('Successfully Connected')
})
.catch(() => {
    console.log('error occure in connection')
})

app.use('/api',router)  // create endpoint

const PORT = process.env.PORT  || '4000'
app.listen(PORT, () =>{
    console.log(`Your server running on port ${PORT}`)
})