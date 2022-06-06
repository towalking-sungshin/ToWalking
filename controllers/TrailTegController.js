const db = require("../models/index"),
    user_tw_table = db.user_tw_table;
    
    
exports.getTrailTeg = (req, res) => {
    res.render("TrailTeg");
}

exports.saveTrailTeg = async(req, res) => {
    try{
        console.log(req.body.user_tw_name);
        console.log(req.body.theme);
        
        await user_tw_table.create({
            user_id: req.params.user_id,
            user_tw_num: req.body.user_tw_num,
            user_tw_name: req.body.user_tw_name,
            user_tw_geo: req.body.user_tw_geo,
            user_tw_start:req.body.user_tw_start,
            user_tw_end: req.body.user_tw_end,
            user_tw_hour: req.body.user_tw_hour,
            user_tw_minute: req.body.user_tw_minute,
            theme: req.body.theme
            // theme2: req.body.theme2,
            // theme3: req.body.theme3
            
        });
         return res.redirect("/towalking/" + user_id + "/list");
    }catch(err){
        res.status(500).send({
            message: err.message
        });
    }
}
