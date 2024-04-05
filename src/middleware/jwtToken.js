const jwt = require('jsonwebtoken');

const verifyToken = function(req,res,next){
    let token = req.header('Authorization');
    if(!token)return res.status(401).json({message:"No token provided."});
    token = token.replace('Bearer ',"");
    try{
        const decoded = jwt.verify(token,"mySecretKey");
        req.user=decoded;
        next();
    }catch(error){
        return res.status(401).json({message:error.message});
    }
}

module.exports = verifyToken;