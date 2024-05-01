import { Transaction } from "../models/transaction.model.js";
import { User } from "../models/User.model.js";

import asyncHandler from "express-async-handler";

const createTransaction2 = asyncHandler(async (req, res) => {
  const { sender, receiver, amount } = req.body;

  if (!sender || !receiver || !amount) {
    res.status(400);
    throw new Error("Something Went wrong");
  }

  const transaction = await Transaction.create({
    sender,
    receiver,
    amount,
  });

  if (!transaction) {
    res.status(400);
    throw new Error("Invalid transaction data");
  }

  const senderName = await User.findById(sender);
  const receiverName = await User.findById(receiver);

  if (!senderName || !receiverName) {
    res.status(400);
    throw new Error("Invalid transaction data");
  }
  console.log(senderName.username, receiverName.username);

  return res
    .status(201)
    .json({
      transaction,
      senderName: senderName.username,
      receiverName: receiverName.username,
    });
});

const createTransactionAndAdd = asyncHandler(async (req, res) => {
  const { sender, receiver, amount } = req.body;

  if (!sender || !receiver || !amount) {
    res.status(400);
    throw new Error("Something Went wrong");
  }

  const senderId = await User.findOne({ username: sender });
  const receiverId = await User.findOne({ username: receiver });

  if (!senderId || !receiverId) {
    res.status(400);
    throw new Error("Invalid transaction data , Invalid userId's");
  }

  const transaction = await Transaction.create({
    sender: senderId._id,
    receiver: receiverId._id,
    amount,
  });

  if (!transaction) {
    res.status(400);
    throw new Error("Invalid transaction data");
  }

  await User.findByIdAndUpdate(
    senderId._id,
    {
      $set: {
        balance: senderId.balance + amount,
      },
    },
    { new: true }
  );

  return res
    .status(201)
    .json({ transaction, senderName: sender, receiverName: receiver });
});



const createTransactionAndSubtract = asyncHandler(async (req, res) => {
  const { sender, receiver, amount } = req.body;

  if (!sender || !receiver || !amount) {
    res.status(400);
    throw new Error("Something Went wrong");
  }

  const senderId = await User.findOne({ username: sender });
  const receiverId = await User.findOne({ username: receiver });

  if (!senderId || !receiverId) {
    res.status(400);
    throw new Error("Invalid transaction data , Invalid userId's");
  }

  const transaction = await Transaction.create({
    sender: senderId._id,
    receiver: receiverId._id,
    amount,
  });

  if (!transaction) {
    res.status(400);
    throw new Error("Invalid transaction data");
  }

  await User.findByIdAndUpdate(
    senderId._id,
    {
      $set: {
        balance: senderId.balance - amount,
      },
    },
    { new: true }
  );

  return res
    .status(201)
    .json({ transaction, senderName: sender, receiverName: receiver });
});



export { createTransactionAndAdd , createTransactionAndSubtract};
