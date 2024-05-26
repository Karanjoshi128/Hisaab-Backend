import {Router} from "express"

import { registerUser , logInUser ,  getUsers } from "../controllers/user.controller.js"
import { createTransactionAndAddBalance1 , createTransactionAndSubtractBalance1 , createTransactionAndAddBalance2 , createTransactionAndSubtractBalance2 ,saveAndCreateTransaction , getTransactions} from "../controllers/transaction.controller.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/getallusers").get(getUsers);
router.route("/getalltransactions").get(getTransactions);
router.route("/login").post(logInUser);
router.route("/transactionaddbal1").post(createTransactionAndAddBalance1);
router.route("/transactionaddbal2").post(createTransactionAndAddBalance2);
router.route("/transactionsubtractbal1").post(createTransactionAndSubtractBalance1);
router.route("/transactionsubtractbal2").post(createTransactionAndSubtractBalance2);
router.route("/saveandcreatetransaction").post(saveAndCreateTransaction);






export default router;