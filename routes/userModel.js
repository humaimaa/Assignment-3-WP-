import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true, //whitespace removed
    },
    email: {
      type: String,
      required: true,
      unique: true, //on one email one user should be logged in
    },
    password: {
      type: String, //can be numbers,letters etc
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    role: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }  //new user create hoga tou created time ajaye ga
);

export default mongoose.model("users", userSchema);