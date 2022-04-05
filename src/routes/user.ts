import expressPromise from "express-promise-router"; //allows you omit try catch  on controllers
import { signUp } from "../controllers/user";

const router = expressPromise();

router.route("/signup").post(signUp);

export default router;
