import { Router } from "express";
import * as developsCtrl from "../controllers/develops.js";
const router = Router();

/* GET users listing. */

router.get("/", developsCtrl.index);

export { router };
