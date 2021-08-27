const express = require('express')
const router = express.Router();
const model = require('../models/model')
const bcrypt = require('bcrypt')

router.post('/signup', async (req, res) => {
    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(req.body.password, saltPassword)
    // Create an instance of a Mongoose model 
    const signedUpUser = new model({
        fullName: req.body.fullName,
        userName: req.body.userName,
        email: req.body.email,
        password: securePassword
    })
    // save() makes Mongoose insert a new document.
    signedUpUser.save()
    .then((data) => res.json(data))
    .catch((err) => res.json(err))
    
})

module.exports = router