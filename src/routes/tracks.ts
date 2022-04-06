import expressPromise from "express-promise-router"; //allows you omit try catch  on controllers

import { getTracks } from "../controllers/tracks";
import auth from "../middlewares/auth";

const router = expressPromise();

router.use(auth);
router.route("/").get(getTracks);

export default router;
