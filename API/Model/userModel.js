const mongoose = require('mongoose')
// create schema for user
const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        unique : true
    }
})

module.exports = mongoose.model('user',userSchema) // create module, connect Schema to db