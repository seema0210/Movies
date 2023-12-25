const User = require('../Model/userModel')
const bcrypt = require('bcryptjs')


const getAllData = async(req,res) => {
    let data;
    try{
        data = await User.find()  // get all data from database
    } catch(e){
        console.log(e)
    }
    if(!data){
        return res.send({message : 'Data not found'})
    }
    return res.send(data)
}
const getData = async (req,res) => {
    const id = req.params.id;  // get id from request
    let data;
    try{
        data = await User.findById(id) // find the data od current id
    } catch(e){
        console.log(e)
    }
    if(!data){
       return res.send({message:"data not found"})
    }
    return res.send(data)
}

const addUser = async(req,res) => {
    const { name,email,password } = req.body;
    if(name==='' && email==='' && password===''){
        res.send({message : 'All fields are mendatory'})
    }
    let data;
    const hashedPassword = bcrypt.hashSync(password)  // password convert into hash formate and asign to password
    try{
        data = new User({name,email,password:hashedPassword})
        await data.save()  // new created data save in mongodb
    } catch(e){
        console.log(e)
    }
    return res.send(data)
}

const updateData = async(req,res) => {
    const id = req.params.id;  // get id from request
    const { name,email,password } = req.body;
    let data;
    try{
        data = await User.findByIdAndUpdate(id, {name,email,password}) // update current id data
        data.save()  // save updates in mongodb
    } catch(e){
        console.log(e)
    }
    if(!data){
       return res.send({message : 'data not found by given id'})
    }
    return res.send(data)
}

const deleteData = async(req,res) => {
    const id = req.params.id;
    let data;
    try{
        data = await User.findByIdAndDelete(id)  // delete data from db
    } catch(e){
        console.log(e)
    }
    if(!data){
        return res.send({message:'not delete data'})
    }
    return res.send({message: 'data deleted successfully'})
}

module.exports = { getAllData,addUser,updateData,deleteData,getData }