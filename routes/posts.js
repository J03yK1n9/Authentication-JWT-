const router = require("express").Router();
const verify = require('../verifyToken');
const User = require("../model/User");


router.get('/', verify, (req,res) => {
    res.send(req.user);
    // User.findByIdAndRemove({_id: req.user})
    // res.json({posts: {title: 'my first post', description: 'random data requiring login to access'}})
})


module.exports = router;