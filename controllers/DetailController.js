const db = require(__dirname + "/../models/index")
const tw_Trail = db.tw_Trail;
const user_Trail = db.user_Trail;
const tw_review = db.tw_review;
const user_review = db.user_review;
const user = db.user;

/** 산책로 리스트 가져오기 */
exports.getAllTrails = async (req, res) => {
    try {
        data = await tw_Trail.findAll();
        console.log(data);
        res.render("../views/trailList", {user_id: req.params.user_id, trails: data});
    } catch (err) {
        res.status(500).send({
            message: err.message
        });
    }
};

/** 특정 투월킹 산책로 상세 정보 가져오기 */
exports.getTWTrailDetails = async (req, res) => {
    try {
        data = await tw_Trail.findByPk(req.params.id);
        console.log(data);

        reviewList = await tw_review.findAll({
            attributes: ['title', 'content'],
            where: {
                tw_num: req.params.id
            }
        });
        console.log(reviewList);
        res.render("../views/tw_TrailDetail", {tw : req.params, trailDetail: data, reviews: reviewList});
    } catch (err) {
        res.status(500).send({
            message: err.message
        });
    }
};

/** 특정 사용자 산책로 상세 정보 가져오기 */
exports.getUSERTrailDetails = async (req, res) => {
    try {
        data = await user_Trail.findByPk(req.params.id);
        user_id = data.user_id;
        findUser = await user.findByPk(user_id);
        console.log(user.user_name);

        reviewList = await user_review.findAll({
            attributes: ['title', 'content'],
            where: {
                user_num: req.params.id
            }
        });
        console.log(reviewList);
        res.render("../views/user_TrailDetail", {user: req.params, trailDetail: data, reviews: reviewList, findUser: findUser});
    } catch (err) {
        res.status(500).send({
            message: err.message
        });
    } 
};
