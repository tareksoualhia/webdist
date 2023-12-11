const express = require ('express')
const router = express.Router()
const {getUser, SetUser ,UpdateUser ,DeleteUser , findUserById , loginUser} = require('../controllers/userController')

router.get('/' , getUser)

router.get('/userId/:id' ,findUserById )

router.post('/new' , SetUser)


router.put ('/ubdateUser/:id' , UpdateUser)


router.delete('/deleteUser/:id' , DeleteUser)

router.post('/loginUser' , loginUser)






module.exports = router