import { getUsersForSidebar } from "../controller/user.controller";
import protectRoute from "../middleware/protectRoute";

const express=require("express")


const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar);

export default router;