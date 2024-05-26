import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    transaction : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Transaction"
    }],
    balance1 : {
        type : Number,
        default : 0
    },
    balance1TargetUser : {
      type : String,
      default : ""
    },
    balance2 : {
        type : Number,
        default : 0
    },
    balance2TargetUser : {
      type : String,
      default : ""
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre('save' , async function(next){
    if(!this.isModified('password')){
        return next()
    }
    const genSalt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password , genSalt)
    next()
})

userSchema.methods.isPasswordCorrect = async function (password){
    return await bcrypt.compare(password , this.password);
}






export const User = mongoose.model("User", userSchema);

