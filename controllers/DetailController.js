const db = require(__dirname + "/../models/index")
const tw_Trail = db.tw_Trail;
const user_Trail = db.user_Trail;
const review = db.review;

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

        reviewList = await review.findAll({
            attributes: ['title', 'like'],
            where: {
                tw_num: req.params.id
            }
        });
        console.log(reviewList);
        res.render("../views/tw_TrailDetail", {id: req.params.id, user_id: req.params.user_id, trailDetail: data, reviews: reviewList});
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
        console.log(data);

        reviewList = await review.findAll({
            attributes: ['title', 'like'],
            where: {
                tw_num: req.params.id
            }
        });
        console.log(reviewList);
        res.render("../views/user_TrailDetail", {user_id: req.params.user_id, trailDetail: data, reviews: reviewList});
    } catch (err) {
        res.status(500).send({
            message: err.message
        });
    } 
};
