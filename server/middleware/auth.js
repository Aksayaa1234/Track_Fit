const jwt = require("jsonwebtoken")

const auth=(req,res,next)=>{
    try{
        let token=res.cookies.key;
        if(!token)
        {
            res.status(400);
            res.json({message:"invalid user"});
            return;
        }
        let data=jwt.verify(token,process.env.SECRET_KEY);
        req["userId"]=data.userId;
        req["name"]=data.name;
        next();
    }
    catch(err)
    {
        res.status(500);
        res.json({message:"server error"});
        return;
    }
}

module.export=auth;