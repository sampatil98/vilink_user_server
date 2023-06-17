const mongoose=require("mongoose");

const paiduserSchema= mongoose.Schema({
    plan:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    username:{
        type:String,
        require:true
    },
    usermail:{
        type:String,
        require:true
    }
});

const PaidModel= mongoose.model("paid-user",paiduserSchema);

module.exports={PaidModel}
