const config = require('config');
const jwt = require('jsonwebtoken');

function auth(req, res, next) {
    const token = req.header('x-auth-token');

    if(!token){
        return res.status(401).json({ msg: 'No token found, authorization unsuccessful' });
    }

    try{
        const decrypted = jwt.verify(token, config.get('jwtsecret'));
        req.user = decrypted;
    next();
    } catch(e){
        res.status(400).json({ msg: 'Token is not valid' });
    }
}

module.exports = auth;