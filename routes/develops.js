import { Router } from "express";
import * as developsCtrl from "../controllers/develops.js";
const router = Router();

/* GET users listing. */

router.get("/", developsCtrl.index);
router.get("/new",developsCtrl.new)
router.get("/:id",developsCtrl.show)
router.post("/",developsCtrl.create)
export { router };
