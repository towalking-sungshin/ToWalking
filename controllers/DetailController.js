const db = require(__dirname + "/../models/yujin_index")
const tw_Trail = db.tw_Trail;
const user_Trail = db.user_Trail;
const review = db.review;

/** 산책로 리스트 가져오기 */
exports.getAllTrails = async (req, res) => {
    try {
        data = await tw_Trail.findAll();
        console.log(data);
        res.render("../views/trailList", {trails: data});
    } catch (err) {
        res.status(500).send({
            message: err.message
        });
    }
};

/** 특정 투월킹 산책로 상세 정보 가져오기 */
exports.getTWTrailDetails = async (req, res, next) => {
    try {
        data = await tw_Trail.findByPk(req.params.id);
        console.log(data);
        res.render("../views/tw_TrailDetail", {trailDetail: data});
    } catch (err) {
        res.status(500).send({
            message: err.message
        });
    } next();
};

/** 특정 사용자 산책로 상세 정보 가져오기 */
exports.getUSERTrailDetails = async (req, res, next) => {
    try {
        data = await user_Trail.findByPk(req.params.id);
        console.log(data);
        res.render("../views/user_TrailDetail", {trailDetail: data});
    } catch (err) {
        res.status(500).send({
            message: err.message
        });
    } next();
};

/** 후기 목록 가져오기 (후기 제목과 좋아요 수) */
exports.getReviewList = async (req, res) => {
    try {
        data = await review.findAll();
        console.log(data);
        res.render("../views/user_TrailDetail", {reviews: data});
    } catch (err) {
        res.status(500).send({
            message: err.message
        });
    }
};