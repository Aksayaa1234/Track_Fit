const express=require("express");
const userCond=require("../controller/user");
const workoutCond=require("../controller/workout");
const {auth}=require("../middleware/auth")
const workoutlogsCond=require("../controller/workoutlogs");

const router=express.Router();

router.post("/signup",userCond.signup);
router.post("/login",userCond.login);
router.post("/logout",userCond.logout);
router.post("/workout/add", auth,workoutCond.addWorkout);
router.post("/workout/", auth,workoutCond.workoutDisplay);
router.post("/workout/default/add",workoutCond.addWorkoutDefault);
router.get("/workout/default",workoutCond.workoutDisplayDefault);
router.post("/workout/date",auth,workoutlogsCond.workoutDisplayDate);
router.post("/workout/caleories",auth,workoutlogsCond.totalCaleories);

module.exports=router;