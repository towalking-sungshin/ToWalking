const db = require("../models/index"),
    user_Trail = db.user_Trail;
    
    
exports.getTrailTeg = (req, res) => {
    res.render("TrailTeg", {user_id: req.params.user_id});
}

exports.saveTrailTeg = async(req, res) => {
    try{
        user_id = req.params.user_id;
        var tw_like_findAll = await user_Trail.findAll();
        var count = tw_like_findAll.length;
        console.log("yujin" + count);
        console.log("yujin" + count);
        console.log("yujin" + count);
        console.log("yujin" + count);
        console.log("yujin" + count);

        await user_Trail.create({
            user_tw_num: count,
            user_id: req.params.user_id,
            user_tw_name: req.body.user_tw_name,
            user_tw_geo: req.body.user_tw_geo,
            user_tw_start:req.body.user_tw_start,
            user_tw_end: req.body.user_tw_end,
            user_tw_hour: req.body.user_tw_hour,
            user_tw_minute: req.body.user_tw_minute,
            theme: req.body.theme,
            theme2: req.body.theme2,
            theme3: req.body.theme3
        });

        return res.redirect("/towalking/" + user_id + "/list/userList" );

    }catch(err){
        res.status(500).send({
            message: err.message
        });
    }
}
