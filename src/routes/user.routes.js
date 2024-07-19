import {Router} from "express"

import { registerUser , logInUser ,  getUsers , logOutUser} from "../controllers/user.controller.js"
import { createTransactionAndAddBalance1 , createTransactionAndSubtractBalance1 , createTransactionAndAddBalance2 , createTransactionAndSubtractBalance2 ,saveAndCreateTransaction , getTransactions} from "../controllers/transaction.controller.js";
import checkUsernameCookie from "../middlewares/checkCookiePresent.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/getallusers").get(checkUsernameCookie,getUsers);
router.route("/getalltransactions").get(checkUsernameCookie,getTransactions);
router.route("/login").post(logInUser);
router.route("/logout").post(logOutUser);
router.route("/transactionaddbal1").post(checkUsernameCookie,createTransactionAndAddBalance1);
router.route("/transactionaddbal2").post(checkUsernameCookie,createTransactionAndAddBalance2);
router.route("/transactionsubtractbal1").post(checkUsernameCookie,createTransactionAndSubtractBalance1);
router.route("/transactionsubtractbal2").post(checkUsernameCookie,createTransactionAndSubtractBalance2);
router.route("/saveandcreatetransaction").post(checkUsernameCookie,saveAndCreateTransaction);






export default router;