const { Router } = require('express')
const { getAllData, addUser, updateData, deleteData, getData } = require('../Controller/userController')
const router = Router()

router.get('/getData',getAllData)
router.get('/getData/:id', getData)
router.post('/postData',addUser)
router.put('/updateData/:id',updateData)
router.delete('/deleteData/:id',deleteData)

module.exports = router