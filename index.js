const express = require('express')
require('dotenv').config()
const cors = require('cors')
const mongoose = require('mongoose')
const router = require('./API/Router/useRouter')

const app = express()
app.use(express.json())
app.use(cors())

const LINK_URL = process.env.URL
mongoose.connect(LINK_URL)
.then(()=>{
    console.log('Successfully Connected')
})
.catch(() => {
    console.log('error occure in connection')
})

app.use('/api',router)

const PORT = process.env.PORT  || '4000'
app.listen(PORT, () =>{
    console.log(`Your server running on port ${PORT}`)
})