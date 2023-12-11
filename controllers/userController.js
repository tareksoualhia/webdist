const asyncHandler = require('express-async-handler')
const User= require('../models/UserModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

// get investors 
const getUser = asyncHandler(async (req , res) => {
    const users = await User.find()
    res.status(200).json(users)
})


//create investor
const SetUser = asyncHandler( async (req , res) => {
    if (!req.body.username|| !req.body.email || !req.body.password) {
        res.status(400)
        throw new Error('user can t be empty ')
      }

    
    const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(req.body.password, salt)
  req.body.password=hashedPassword

    const user = await User.create(req.body)

    if (user) {
      res.status(201).json({
        _id: user.id,
        username: user.username,
        email: user.email,
        token: generateToken(user._id),
      })
    } else {
      res.status(400)
      throw new Error('Invalid user data')
    }

    
    

    
   
})


const loginUser = asyncHandler(async(req , res )=>{
  const { email, password } = req.body

  // Check for user email
  const user = await User.findOne({ email })

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.username,
      email: user.email,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid credentials')
  }

})


// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}

//update user
const UpdateUser = asyncHandler(async (req , res) => {

    const user = await User.findById(req.params.id)

  if (!user) {
    res.status(400)
    throw new Error('user not found')
  }
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

    res.status(200).json(updatedUser)
})

//delete user 
const DeleteUser = asyncHandler(async (req , res) => {
    const user = await User.findById(req.params.id)

    if (!user) {
      res.status(400)
      throw new Error('user not found')
    }

    await user.remove()
    res.status(200).json({id : req.params.id})
})


const findUserById = asyncHandler ( async(req , res) => {
  const user = await User.findById(req.params.id)
  res.status(200).json(user)
})

  module.exports = {
    getUser, SetUser ,UpdateUser ,DeleteUser , findUserById , loginUser
}