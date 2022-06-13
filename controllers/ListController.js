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
            attributes:['user_tw_num', 'user_tw_name','user_id','user_tw_geo','like']

        });
        console.log(data);
        res.render("../views/main",{trails:data});
    }catch(err){
        res.status(500).send({
            message:err.message
        });
    }
};

exports.trailFilterList = async (req,res)=>{
    try{
        data = await tw_Trail.findAll({
            attributes:['tw_num', 'tw_name', 'tw_pic', 'like','tw_geo'],
            where: {
                tw_geo: req.params.user_tw_geo
            }
        });
        
        console.log(data);
        res.render("../views/main",{trails:data});
    }catch(err){
        res.status(500).send({
            message:err.message
        });
    }
};

exports.trailFilterUserList = async (req,res)=>{
    try{
        data = await user_Trail.findAll({
            attributes:['user_tw_num', 'user_tw_name','user_id','user_tw_geo','like'],
            where: {
                user_tw_geo: req.params.user_tw_geo
            }
        });
        
        console.log(data);
        res.render("../views/main",{trails:data});
    }catch(err){
        res.status(500).send({
            message:err.message
        });
    }
};