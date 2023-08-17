const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const secretKey = process.env.KEY;

const userSchema = new mongoose.Schema({
  
});

userSchema.pre("save", async function(next){

  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }
  next();

});

// token generate process

userSchema.methods.generateAuthToken = async function(){
  try {
    
    let token = jwt.sign({_id:this._id},secretKey);
    this.tokens = this.tokens.concat({token});
    await this.save();
    return token;

  } catch (error) {
    console.log("Error while generating token",error);
  }
}


const User = new mongoose.model("User", userSchema);

module.exports = User;