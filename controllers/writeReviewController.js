const db = require("../models/index"), 
user_Trail = db.user_Trail, 
tw_Trail = db.tw_Trail;

// 사용자 등록 산책로 후기 등록 페이지 렌더링
exports.sendFormOfuserid = async (req, res) => {
    try {
        let road = await user_Trail.findOne({
            where : {
                user_tw_num : req.params.id}
            }); 
            
        return res.render("../views/user_write_review", {user_id : req.params.user_id, id : req.params.id, roadName : road});
    }
    catch (err) {
        res.status(500).send({
            message : err.message
        });
    }
}

// 투월킹 제공 산책로 후기 등록 페이지 렌더링
exports.sendFormOftwid = async (req, res) => {
    try {
        let road = await tw_Trail.findOne({
            where : {
                tw_num : req.params.id}
            }); 
            
        return res.render("../views/tw_write_review", {user_id : req.params.user_id, id : req.params.id, roadName : road});
    }
    catch (err) {
        res.status(500).send({
            message : err.message
        });
    }
}