const express = require('express')
const router = express.Router();
const model = require('../models/model')

router.post('/signup', (req, res) => {
    // Create an instance of a Mongoose model 
    const signedUpUser = new model({
        fullName: req.body.fullName,
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password
    })
    // save() makes Mongoose insert a new document.
    signedUpUser.save()
    .then((data) => res.json(data))
    .catch((err) => res.json(err))
    
})

module.exports = router