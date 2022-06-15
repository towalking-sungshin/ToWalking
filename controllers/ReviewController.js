const db = require(__dirname + "/../models/index")
const tw_review = db.tw_review;
const user_review = db.user_review;
const tw_Trail = db.tw_Trail;
const user_Trail = db.user_Trail;

// 실제 method 작성부분
exports.getUserReviewList = async (req, res) => {
    
    try {
        user_tw_name = await user_Trail.findByPk(req.params.id);
        user_review_content = await user_review.findAll({
            attributes:['user_tw_num', 'title', 'review_date', 'like', 'star', 'content'],
            where: {
                user_tw_num: req.params.id
            }
        });
        console.log(review_content);
        res.render("../views/userReview",{id: req.params.user_tw_num, review_num: req.params.review_num, reviews:user_review_content});
    } catch (err) {
        res.status(500).send({
            message: err.message
        });
    }
};

exports.getTwReviewList = async (req, res) => {
    try {
        tw_name = await tw_Trail.findByPk(req.params.id);
        console.log(req.params.id);
        console.log(tw_name);
        review_content = await tw_review.findAll({
            attributes:['review_num', 'tw_num', 'title', 'review_date', 'like', 'star', 'content'],
            where: {
                tw_num: req.params.id
            }
        });
        console.log(review_content);
        res.render("../views/twReview",{id: req.params.tw_num,review_num : req.params.review_num, tw_name: tw_name, reviews:review_content});
    } catch (err) {
        res.status(500).send({
            message: err.message
        });
    }
};
