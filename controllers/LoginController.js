const db = require(__dirname + "/../models/index")
const user = db.user;
var msg = require ('dialog');

/** 회원가입 Get 매핑 */
exports.signupGet = async (req, res) => {
    try {
        res.render("../views/signup");
    } catch (err) {
        res.status(500).send({
            message: err.message
        });
    }
};

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

/** 회원가입 Post 매핑 */
exports.signupPost = async (req, res) => {
    try {
        user_id = req.body.id;
        user_pw = req.body.pw;
        user_name = req.body.name;

        userData = await user.findByPk(user_id);

        if (userData) { // 해당 아이디가 db에 존재한다면
            console.log("이미 존재하는 아이디입니다.");
            return res.render("../views/signup_idExist");
        } else { // 새로운 아이디라면 회원가입
            await user.create({
                user_id: user_id,
                user_pw: user_pw,
                user_name: user_name,
            });
            return res.redirect("/towalking/login"); // 로그인 페이지로 리다이렉션
        }
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
                return res.redirect("/towalking/" + user_id + "/list");
            } else {
                console.log("비밀번호가 일치하지 않음");
                res.send("<script>alert('wrong password!');history.go(-1);</script>");
            }
        } else {
            console.log("해당 아이디가 존재하지 않음");
            res.send("<script>alert(' ID does not exist!');history.go(-1);</script>");
        }
    } catch (err) {
        res.status(500).send({
            message: err.message
        });
    }
};

