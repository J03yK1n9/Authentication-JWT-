const router = require("express").Router();
const User = require("../model/User");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const {registerValidation, loginValidation} = require('../validation')



router.post("/register", async (req, res) => {
  // Validating user data before making User
  const {error} = registerValidation(req.body);
  if(error) return res.status(400).send(error.details[0].message)

    // Checking if user is already in the DB
    const emailExist = await User.findOne({email: req.body.email})
    if(emailExist) return res.status(400).send('Email already exists')

    // Hashing Password
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(req.body.password, salt)


    // Create a new user(this will only execute if validation is successful)
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashPassword,
    });
    try {
      const savedUser = await user.save();
      res.send({user: user._id});
    } catch (err) {
      res.status(400).send(err);
    }
});

// Login
router.post('/login', async (req,res) => {
    // Validating user data before making User
  const {error} = loginValidation(req.body);
  if(error) return res.status(400).send(error.details[0].message)
   // Checking if email already exists(by checking if user is already in the DB)
   const user = await User.findOne({email: req.body.email})
   if(!user) return res.status(400).send('Email is wrong')
    //Checking if password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).send('Invalid password')

    // Create and assign a token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET)
    res.header('auth-token', token).send(token)
})

module.exports = router;
