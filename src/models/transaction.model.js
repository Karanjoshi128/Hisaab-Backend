import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    sender: {
      type: String,
      required: true
    },
    receiver: {
      type: String,
      required: true
    },
    reason: {
      type: String,
    },
    amount: {
      type: Number,
      required: true,
      default: 0,
    },
    transactionDate: {
      type: Date,
      default: Date.now, // Custom field for the transaction date
    },
  },
  {
    timestamps: true,
  }
);

export const Transaction = mongoose.model("Transaction", transactionSchema);
