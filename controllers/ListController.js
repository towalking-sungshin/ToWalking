// const { where } = require("sequelize/types");

const db= require(__dirname + "/../models/hyomin_index")
const tw_Trail = db.tw_Trail;
const user_Trail = db.user_Trail;


exports.trailList = async (req,res)=>{
    try{
        data = await tw_Trail.findAll({
            attributes:['tw_num', 'tw_name', 'tw_pic', 'like','tw_geo']

        });
        console.log(data);
        res.render("../views/main",{trails:data});
    }catch(err){
        res.status(500).send({
            message:err.message
        });
    }
};

exports.userList = async (req,res)=>{
    try{
        data = await user_Trail.findAll({
            attributes:['user_tw_num', 'user_tw_name','user_id','user_tw_geo','user_tw_pic','like']

        });
        console.log(data);
        res.render("../views/main",{trails:data});
    }catch(err){
        res.status(500).send({
            message:err.message
        });
    }
}

exports.trailFilterList = async (req,res)=>{
    try{
        data = await tw_Trail.findAll({
            attributes:['tw_num', 'tw_name', 'tw_pic', 'like'],
            where: {
                tw_geo: req.params.tw_geo //여기선 이거!?
            }
        });
        
        console.log(data);
        //res.render("../views/main_geo",{trails:data});
        res.render("../views/main",{trails:data});
        //res.render("../views/main",{filterTrails:data});
    }catch(err){
        res.status(500).send({
            message:err.message
        });
    }
};