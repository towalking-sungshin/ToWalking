const db = require(__dirname + "/../models/yujin_index")
const user = db.user;

/** 로그인 Get 매핑 */
exports.loginGet = async (req, res) => {
    try {
        res.render("../views/login");
    } catch (err) {
        res.status(500).send({
            message: err.message
        });
    }
};

/** 로그인 Post 매핑 */
exports.loginPost = async (req, res) => {
    try {
        user_id = req.body.id;
        user_pw = req.body.pw;

        userData = await user.findByPk(user_id);

        if (userData != null) { // 해당 아이디가 db에 존재한다면
            if (userData.user_pw == user_pw) { // 아이디와 비밀번호가 일치한다면
                console.log("로그인 성공");
                return res.redirect("/towalking/" + user_id + "/1/tw_detail");
            } else {
                console.log("비밀번호가 일치하지 않음");
                return res.redirect("/towalking/login_noPwPage");
            }
        } else {
            console.log("해당 아이디가 존재하지 않음");
                return res.redirect("/towalking/login_noIdPage");
        }
    } catch (err) {
        res.status(500).send({
            message: err.message
        });
    }
};

/** 아이디가 존재하지 않을 경우 페이지 매핑 */
exports.noId = async (req, res) => {
    try {
        res.render("../views/login_noIdPage");
    } catch (err) {
        res.status(500).send({
            message: err.message
        });
    }
};

/** 비밀번호가 일치하지 않을 경우 페이지 매핑 */
exports.noPw = async (req, res) => {
    try {
        res.render("../views/login_noPwPage");
    } catch (err) {
        res.status(500).send({
            message: err.message
        });
    }
};


