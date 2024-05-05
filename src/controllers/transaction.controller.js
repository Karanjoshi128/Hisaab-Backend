import { Transaction } from "../models/transaction.model.js";
import { User } from "../models/User.model.js";

import asyncHandler from "express-async-handler";


const createTransactionAndAddBalance1 = asyncHandler(async (req, res) => {
  const paramAmount = req.query.paramAmount;
  const paramUsername = req.query.paramUsername;
  const user = await User.findOne({ username: paramUsername }).select(
    "-password"
  );
  if (!user) {
    res.status(400);
    throw new Error("No users found");
  }
  const updatedUser = await User.findByIdAndUpdate(
    user._id,
    {
      $set: {
        balance1: parseFloat(user.balance1) + parseFloat(paramAmount),
      },
    },
    { new: true }
  );

  if (!updatedUser) {
    res.status(400);
    throw new Error("Invalid transaction data");
  }

  return res.status(201).json(updatedUser);
});
const createTransactionAndAddBalance2 = asyncHandler(async (req, res) => {
  const paramAmount = req.query.paramAmount;
  const paramUsername = req.query.paramUsername;
  const user = await User.findOne({ username: paramUsername }).select(
    "-password"
  );
  if (!user) {
    res.status(400);
    throw new Error("No users found");
  }
  const updatedUser = await User.findByIdAndUpdate(
    user._id,
    {
      $set: {
        balance2: parseFloat(user.balance2) + parseFloat(paramAmount),
      },
    },
    { new: true }
  );

  if (!updatedUser) {
    res.status(400);
    throw new Error("Invalid transaction data");
  }

  return res.status(201).json(updatedUser);
});
const createTransactionAndSubtractBalance1 = asyncHandler(async (req, res) => {
  const paramAmount = req.query.paramAmount;
  const paramUsername = req.query.paramUsername;
  const user = await User.findOne({ username: paramUsername }).select(
    "-password"
  );
  if (!user) {
    res.status(400);
    throw new Error("No user found");
  }
  const updatedUser = await User.findByIdAndUpdate(
    user._id,
    {
      $set: {
        balance1: parseFloat(user.balance1) - parseFloat(paramAmount),
      },
    },
    { new: true }
  );

  if (!updatedUser) {
    res.status(400);
    throw new Error("Invalid transaction data");
  }

  return res.status(201).json(updatedUser);
});



const createTransactionAndSubtractBalance2 = asyncHandler(async (req, res) => {
  const paramAmount = req.query.paramAmount;
  const paramUsername = req.query.paramUsername;
  const user = await User.findOne({ username: paramUsername }).select(
    "-password"
  );
  if (!user) {
    res.status(400);
    throw new Error("No users found");
  }
  const updatedUser = await User.findByIdAndUpdate(
    user._id,
    {
      $set: {
        balance2: parseFloat(user.balance2) - parseFloat(paramAmount),
      },
    },
    { new: true }
  );

  if (!updatedUser) {
    res.status(400);
    throw new Error("Invalid transaction data");
  }

  return res.status(201).json(updatedUser);
});

export {
  createTransactionAndAddBalance1,
  createTransactionAndSubtractBalance1,
  createTransactionAndAddBalance2,
  createTransactionAndSubtractBalance2,
};
