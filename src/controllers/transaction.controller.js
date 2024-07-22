import { Transaction } from "../models/transaction.model.js";
import { User } from "../models/User.model.js";

import asyncHandler from "express-async-handler";

const getTransactions = asyncHandler(async (req, res) => {
  const transactions = await Transaction.find({}).sort({ createdAt: -1 });
  if (transactions.length === 0) {
    res.status(400);
    throw new Error("No transactions found");
  }
  return res.status(200).json(transactions);
});

const createTransactionAndAddBalance1 = asyncHandler(async (req, res) => {
  const paramAmount = req.query.paramAmount;
  const paramUsername = req.cookies.username;
  const targetUser = req.query.targetUser;
  const targetUserOne = req.query.targetUserOne;
  const targetUserTwo = req.query.targetUserTwo;

  const user = await User.findOne({ username: paramUsername }).select(
    "-password"
  );
  if (!user) {
    res.status(400);
    throw new Error("No users found");
  }
  const targetUserInDb = await User.findOne({ username: targetUser }).select(
    "-password"
  );
  if (!targetUserInDb) {
    res.status(400);
    throw new Error("No target users found");
  }

  user.balance1TargetUser = targetUserOne;
  user.balance2TargetUser = targetUserTwo;
  user.save();
  // console.log(user.balance1TargetUser);
  // console.log(user.balance2TargetUser);
  // console.log(targetUserInDb.balance1TargetUser);
  // console.log(targetUserInDb.balance2TargetUser);

  if (
    user.balance1TargetUser === targetUserOne &&
    user.balance2TargetUser === targetUserTwo
  ) {
    if (targetUserInDb.balance1TargetUser === paramUsername) {
      const updatedTargetUser1 = await User.findByIdAndUpdate(
        targetUserInDb._id,
        {
          $set: {
            balance1:
              parseFloat(targetUserInDb.balance1) - parseFloat(paramAmount),
          },
        },
        { new: true }
      );

      if (!updatedTargetUser1) {
        res.status(400);
        throw new Error("Invalid transaction data");
      }
    } else if (targetUserInDb.balance2TargetUser === paramUsername) {
      // console.log(targetUserInDb.balance2TargetUser);
      const updatedTargetUser2 = await User.findByIdAndUpdate(
        targetUserInDb._id,
        {
          $set: {
            balance2:
              parseFloat(targetUserInDb.balance2) - parseFloat(paramAmount),
          },
        },
        { new: true }
      );

      if (!updatedTargetUser2) {
        res.status(400);
        throw new Error("Invalid transaction data");
      }
    }

    const updatedUser = await User.findByIdAndUpdate(
      user._id,
      {
        $set: {
          balance1: parseFloat(user.balance1) + parseFloat(paramAmount),
        },
      },
      { new: true }
    ).select("-password");

    if (!updatedUser) {
      res.status(400);
      throw new Error("Invalid transaction data");
    }
    return res.status(201).json(updatedUser);
  }
});

const createTransactionAndAddBalance2 = asyncHandler(async (req, res) => {
  const paramAmount = req.query.paramAmount;
  const paramUsername = req.cookies.username;
  const targetUser = req.query.targetUser;
  const targetUserOne = req.query.targetUserOne;
  const targetUserTwo = req.query.targetUserTwo;

  const user = await User.findOne({ username: paramUsername }).select(
    "-password"
  );
  if (!user) {
    res.status(400);
    throw new Error("No users found");
  }
  const targetUserInDb = await User.findOne({ username: targetUser }).select(
    "-password"
  );
  if (!targetUserInDb) {
    res.status(400);
    throw new Error("No target users found");
  }

  user.balance1TargetUser = targetUserOne;
  user.balance2TargetUser = targetUserTwo;
  user.save();

  if (
    user.balance1TargetUser === targetUserOne &&
    user.balance2TargetUser === targetUserTwo
  ) {
    if (targetUserInDb.balance1TargetUser === paramUsername) {
      // console.log(targetUserInDb.balance1TargetUser);
      const updatedTargetUser1 = await User.findByIdAndUpdate(
        targetUserInDb._id,
        {
          $set: {
            balance1:
              parseFloat(targetUserInDb.balance1) - parseFloat(paramAmount),
          },
        },
        { new: true }
      );

      if (!updatedTargetUser1) {
        res.status(400);
        throw new Error("Invalid transaction data");
      }
    } else if (targetUserInDb.balance2TargetUser === paramUsername) {
      // console.log(targetUserInDb.balance2TargetUser);
      const updatedTargetUser2 = await User.findByIdAndUpdate(
        targetUserInDb._id,
        {
          $set: {
            balance2:
              parseFloat(targetUserInDb.balance2) - parseFloat(paramAmount),
          },
        },
        { new: true }
      );

      if (!updatedTargetUser2) {
        res.status(400);
        throw new Error("Invalid transaction data");
      }
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
  }
});

const createTransactionAndSubtractBalance1 = asyncHandler(async (req, res) => {
  const paramAmount = req.query.paramAmount;
  const paramUsername = req.cookies.username;
  const targetUser = req.query.targetUser;
  const targetUserOne = req.query.targetUserOne;
  const targetUserTwo = req.query.targetUserTwo;

  const user = await User.findOne({ username: paramUsername }).select(
    "-password"
  );
  if (!user) {
    res.status(400);
    throw new Error("No users found");
  }
  const targetUserInDb = await User.findOne({ username: targetUser }).select(
    "-password"
  );
  if (!targetUserInDb) {
    res.status(400);
    throw new Error("No target users found");
  }

  user.balance1TargetUser = targetUserOne;
  user.balance2TargetUser = targetUserTwo;
  user.save();

  if (
    user.balance1TargetUser === targetUserOne &&
    user.balance2TargetUser === targetUserTwo
  ) {
    if (targetUserInDb.balance1TargetUser === paramUsername) {
      // console.log(targetUserInDb.balance1TargetUser);
      const updatedTargetUser1 = await User.findByIdAndUpdate(
        targetUserInDb._id,
        {
          $set: {
            balance1:
              parseFloat(targetUserInDb.balance1) + parseFloat(paramAmount),
          },
        },
        { new: true }
      );

      if (!updatedTargetUser1) {
        res.status(400);
        throw new Error("Invalid transaction data");
      }
    } else if (targetUserInDb.balance2TargetUser === paramUsername) {
      // console.log(targetUserInDb.balance2TargetUser);
      const updatedTargetUser2 = await User.findByIdAndUpdate(
        targetUserInDb._id,
        {
          $set: {
            balance2:
              parseFloat(targetUserInDb.balance2) + parseFloat(paramAmount),
          },
        },
        { new: true }
      );

      if (!updatedTargetUser2) {
        res.status(400);
        throw new Error("Invalid transaction data");
      }
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
  }
});

const createTransactionAndSubtractBalance2 = asyncHandler(async (req, res) => {
  const paramAmount = req.query.paramAmount;
  const paramUsername = req.cookies.username;
  const targetUser = req.query.targetUser;
  const targetUserOne = req.query.targetUserOne;
  const targetUserTwo = req.query.targetUserTwo;

  const user = await User.findOne({ username: paramUsername }).select(
    "-password"
  );
  if (!user) {
    res.status(400);
    throw new Error("No users found");
  }
  const targetUserInDb = await User.findOne({ username: targetUser }).select(
    "-password"
  );
  if (!targetUserInDb) {
    res.status(400);
    throw new Error("No target users found");
  }

  user.balance1TargetUser = targetUserOne;
  user.balance2TargetUser = targetUserTwo;
  user.save();

  if (
    user.balance1TargetUser === targetUserOne &&
    user.balance2TargetUser === targetUserTwo
  ) {
    if (targetUserInDb.balance1TargetUser === paramUsername) {
      // console.log(targetUserInDb.balance1TargetUser);
      const updatedTargetUser1 = await User.findByIdAndUpdate(
        targetUserInDb._id,
        {
          $set: {
            balance1:
              parseFloat(targetUserInDb.balance1) + parseFloat(paramAmount),
          },
        },
        { new: true }
      );

      if (!updatedTargetUser1) {
        res.status(400);
        throw new Error("Invalid transaction data");
      }
    } else if (targetUserInDb.balance2TargetUser === paramUsername) {
      // console.log(targetUserInDb.balance2TargetUser);
      const updatedTargetUser2 = await User.findByIdAndUpdate(
        targetUserInDb._id,
        {
          $set: {
            balance2:
              parseFloat(targetUserInDb.balance2) + parseFloat(paramAmount),
          },
        },
        { new: true }
      );

      if (!updatedTargetUser2) {
        res.status(400);
        throw new Error("Invalid transaction data");
      }
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
  }
});

const saveAndCreateTransaction = asyncHandler(async (req, res) => {
  const { sender, receiver, amount, reason } = req.body;

  if (!sender || !receiver || !amount) {
    res.status(400);
    throw new Error("Please provide all required fields");
  }

  const newTransaction = await Transaction.create({
    sender,
    receiver,
    amount,
    reason,
  });

  if (!newTransaction) {
    res.status(400);
    throw new Error("creation of transaction data was unsuccessful");
  }

  const count = await Transaction.countDocuments();

  // If the count exceeds 50, delete the oldest documents

  if (count > 50) {
    const oldestTransactions = await Transaction.find()
      .sort({ transactionDate: 1 })
      .limit(count - 50);
    const oldestIds = oldestTransactions.map((transaction) => transaction._id);
    await Transaction.deleteMany({ _id: { $in: oldestIds } });
  }

  return res.status(201);
});

export {
  getTransactions,
  createTransactionAndAddBalance1,
  createTransactionAndSubtractBalance1,
  createTransactionAndAddBalance2,
  createTransactionAndSubtractBalance2,
  saveAndCreateTransaction,
};
