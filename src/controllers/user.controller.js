import asyncHandler from "express-async-handler";
import { User } from "../models/User.model.js";

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Please fill all the fields");
  }

  const userExistsWithUserName = await User.findOne({ username });

  if (userExistsWithUserName) {
    res.status(400);
    throw new Error("username is already taken");
  }

  const userExistsWithEmail = await User.findOne({ email });

  if (userExistsWithEmail) {
    res.status(400);
    throw new Error("user already exists");
  }

  const countOfDocuments = await User.countDocuments();

  if (countOfDocuments > 2) {
    res.status(400);
    throw new Error("No more users can be added");
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

const getUsers = asyncHandler(async (req, res) => {
  const paramValue = req.query.paramName;
  const users = await User.find({ username: paramValue }).select("-password");
  if (!users) {
    res.status(400);
    throw new Error("No users found");
  }
  const otherUsersData = await User.find({
    username: { $ne: paramValue },
  }).select("-password");
  if (!otherUsersData) {
    res.status(400);
    throw new Error("No users found");
  }

  return res.status(200).json({ users, otherUsersData });
});

const logInUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Please fill all the fields1");
  }

  const user = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (!user) {
    res.status(400);
    throw new Error("Invalid credentials");
  }
  const validPassword = await user.isPasswordCorrect(password);

  if (!validPassword) {
    res.status(400);
    throw new Error("Invalid credentials");
  }
  const loggedInUser = await User.findById(user._id).select("-password");

  return res.status(200).json(loggedInUser);
});




export { registerUser, logInUser, getUsers};
