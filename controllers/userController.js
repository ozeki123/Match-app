const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcrypt');

module.exports.signup = (req, res) => {
    const { name, email, password } = req.body;

    if(!name || !email || !password ) {
        res.status(400).json({msg: 'Please enter all fields'});
    }

    User.findOne({email})
    .then(user => {
        if(user) {
            return res.status(400).json({msg: 'User already exists'});
        }

        const newUser = new User({ name, email, password});

        
    })
}