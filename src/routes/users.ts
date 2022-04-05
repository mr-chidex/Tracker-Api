import expressPromise from "express-promise-router"; //allows you omit try catch  on controllers
import { signIn, signUp } from "../controllers/users";

const router = expressPromise();

router.route("/signup").post(signUp);
router.route("/signin").post(signIn);

export default router;
