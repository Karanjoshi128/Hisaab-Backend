import {Router} from "express"

import { registerUser , logInUser} from "../controllers/user.controller.js"
import { createTransactionAndAdd , createTransactionAndSubtract} from "../controllers/transaction.controller.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(logInUser);
router.route("/transactionadd").post(createTransactionAndAdd);
router.route("/transactionsubtract").post(createTransactionAndSubtract);





export default router;