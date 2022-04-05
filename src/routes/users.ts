import expressPromise from "express-promise-router"; //allows you omit try catch  on controllers
import { signUp } from "../controllers/users";

const router = expressPromise();

router.route("/signup").post(signUp);

export default router;
