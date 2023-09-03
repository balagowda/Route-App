const express = require("express");
const router = new express.Router();
const User = require("../db/models/userSchema");
const bcrypt = require("bcryptjs");
const Authenticate = require('../Auth/Authenticate');
const axios = require('axios');

// user register data
router.post("/register", async (req, res) => {
  const { fname, email, password, cpassword } = req.body;

  if (!fname || !email || !password || !cpassword) {
    res.status(422).json({ error: "Fill all the feild" });
  }

  try {
    const preUser = await User.findOne({ email: email });

    if (preUser) {
      res.status(422).json({ error: "User already registerd" });
    } else if (password !== cpassword) {
      res.status(422).json({ error: "Password doesn't matches" });
    } else {
      const createUser = new User({
        fname,
        email,
        password,
        cpassword,
      });

      const storedata = await createUser.save();
      res.status(201).json(storedata);
    }
  } catch (error) {
    console.log(error.message);
  }
});

// Login User

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  // console.log(req.body);

  if (!email || !password) {
    res.status(422).json({ error: "Fill all the feild" });
  }

  try {
    const userLogin = await User.findOne({ email: email });
    // console.log(userLogin);
    if(userLogin){
      const isMatch = await bcrypt.compare(password,userLogin.password);

      if(!isMatch){
        res.status(422).json({error:"Invalid details"});
      }
      else{
        //token generate function
        const token = await userLogin.generateAuthToken();

        res.cookie("routeProject", token, {
          expires: new Date(Date.now() + 2589000),
          httpOnly: true
      });

        res.status(201).json({message:"login Success"});
      }
    }
    else{
      res.status(422).json({error:"No user Found"});
    }
  } 
  catch (error) {
    console.log(error.message);
  }

});

// captcha verification

router.post("/verify-token", async (req,res) => {
  const { reCAPTCHA_TOKEN, Secret_Key} = req.body;

  try {
    let response = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${Secret_Key}&response=${reCAPTCHA_TOKEN}`);
    console.log(response.data);

    return res.status(200).json({
      success:true,
      message: "Token successfully verified",
      verification_info: response.data
    });
  } catch(error) {
    console.log(error);

    return res.status(500).json({
      success:false,
      message: "Error verifying token"
    })
  }
});

//finding user function

router.get('/userdata',Authenticate,async(req,res)=>{
  try {

    const getUser = await User.findOne({_id:req.userID});
    // console.log(buyUser);
    res.status(201).json(getUser);
    
  } catch (error) {
    console.log(error.message);
  }
});

//Logout user

router.get('/logout',Authenticate,(req,res)=>{
  try {
    req.rootUser.tokens = req.rootUser.tokens.filter((cruval) => {
        return cruval.token !== req.token
    });

    res.clearCookie("routeProject", { path: "/" });
    req.rootUser.save();
    res.status(201).json(req.rootUser.tokens);
    console.log("user logout");

} catch (error) {
    console.log(error + "error in user logout");
}
});

module.exports = router;