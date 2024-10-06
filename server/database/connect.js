
const mongoose = require("mongoose");

mongoose.connect(process.env.DatabaseURL)
.then(()=>{
    console.log("Database is connected");
})

.catch((err)=>{
    console.log(err);
})