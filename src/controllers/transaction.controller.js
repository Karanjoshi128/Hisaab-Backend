import { Transaction } from "../models/transaction.model.js";
import { User } from "../models/User.model.js";

import asyncHandler from "express-async-handler";

const createTransactionAndAddBalance1 = asyncHandler(async (req, res) => {
  const paramAmount = req.query.paramAmount;
  const paramUsername = req.query.paramUsername;
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

  // user.balance1TargetUser = targetUserOne;
  // user.balance2TargetUser = targetUserTwo;
  // user.save();
  console.log(user.balance1TargetUser);
  console.log(user.balance2TargetUser);
  console.log(targetUserInDb.balance1TargetUser);
  console.log(targetUserInDb.balance2TargetUser);

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
      console.log(targetUserInDb.balance2TargetUser);
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
  const paramUsername = req.query.paramUsername;
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

  // user.balance1TargetUser = targetUserOne;
  // user.balance2TargetUser = targetUserTwo;
  // user.save();


  if (
    user.balance1TargetUser === targetUserOne &&
    user.balance2TargetUser === targetUserTwo
  ) {
    if (targetUserInDb.balance1TargetUser === paramUsername) {
      console.log(targetUserInDb.balance1TargetUser);
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
      console.log(targetUserInDb.balance2TargetUser);
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
  const paramUsername = req.query.paramUsername;
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

  // user.balance1TargetUser = targetUserOne;
  // user.balance2TargetUser = targetUserTwo;
  // user.save();

  if (
    user.balance1TargetUser === targetUserOne &&
    user.balance2TargetUser === targetUserTwo
  ) {
    if (targetUserInDb.balance1TargetUser === paramUsername) {
      console.log(targetUserInDb.balance1TargetUser);
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
      console.log(targetUserInDb.balance2TargetUser);
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
  const paramUsername = req.query.paramUsername;
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

  // user.balance1TargetUser = targetUserOne;
  // user.balance2TargetUser = targetUserTwo;
  // user.save();

  if (
    user.balance1TargetUser === targetUserOne &&
    user.balance2TargetUser === targetUserTwo
  ) {
    if (targetUserInDb.balance1TargetUser === paramUsername) {
      console.log(targetUserInDb.balance1TargetUser);
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
      console.log(targetUserInDb.balance2TargetUser);
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




export {
  createTransactionAndAddBalance1,
  createTransactionAndSubtractBalance1,
  createTransactionAndAddBalance2,
  createTransactionAndSubtractBalance2,
};
