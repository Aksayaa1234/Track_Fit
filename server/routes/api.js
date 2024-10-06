const express=require("express");
const userCond=require("../controller/user");

const router=express.Router();

router.post("/signup",userCond.signup);
router.post("/login",userCond.login);
router.post("/logout",userCond.logout);

module.exports=router;