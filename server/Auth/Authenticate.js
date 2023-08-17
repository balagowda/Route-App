const jwt = require('jsonwebtoken');
const User = require('../db/models/userSchema');
const secrateKey = process.env.KEY;

const Authenticate = async(req,res,next)=>{
    try {

        const token = req.cookies.cloneProject;
       
        const verify = jwt.verify(token,secrateKey);
        

        const rootUser = await User.findOne({_id:verify._id,"tokens.token":token});
        

        if(!rootUser){
            throw new Error('User Not Found');
        }

        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;
        next();

    } catch (error) {
        res.status(401).send({error:"Unauthorised user"});
        console.log(error);
    }
}

module.exports = Authenticate;