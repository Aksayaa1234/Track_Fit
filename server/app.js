require('dotenv').config();
const express=require("express");
const auth=require("./middleware/auth");
const cookieParser=require("cookie-parser");
const userCond=require("./controller/user");
const api=require("./routes/api");

const app=express();
const PORT=process.env.PORT;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
app.use("/api",api);

app.get("/health_check",userCond.health_check);

app.listen(PORT,()=>{
    console.log(`server is running in port ${PORT}`);
})