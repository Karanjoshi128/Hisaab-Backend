import asyncHandler from "express-async-handler";
import { User } from "../models/User.model.js";

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Please fill all the fields");
  }

  const newUser = await User.create({
    username,
    email,
    password,
  });

  if (!newUser) {
    res.status(400);
    throw new Error("Invalid user data");
  }

  const user = await User.findById(newUser._id).select("-password");
  return res.status(201).json(user);
});

const logInUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if(!username && !email) {
    res.status(400);
    throw new Error("Please fill all the fields");
  }

  if (!password) {
    res.status(400);
    throw new Error("Please fill all the fields");
  }

  const user = await User.findOne({
    $or: [{ username }, { email }],
  }).select("-password")

  if (!user) {
    res.status(400);
    throw new Error("Invalid credentials");
  }

  return res.status(200).json(user);



});

export { registerUser, logInUser };
