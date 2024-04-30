import {Router} from "express"

import { registerUser , logInUser} from "../controllers/user.controller.js"

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(logInUser);





export default router;