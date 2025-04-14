const  getUsersForSidebar =require( "../controller/user.controller");
const protectRoute =require( "../middleware/protectRoute");

const express=require("express")


const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar);

module.exports=router