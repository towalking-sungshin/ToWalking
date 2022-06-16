const port = 3000,
    express = require("express"),
    app = express(), // 웹 서버 애플리케이션 할당
    loginController = require("./controllers/LoginController"),
    errorController = require("./controllers/errorController"),
    DetailController = require("./controllers/DetailController"),
    TrailTegController = require("./controllers/TrailTegController"),
    ListController = require("./controllers/ListController"),
    LikeController = require("./controllers/LikeController"),
    writereviewController = require("./controllers/writeReviewController"),
    saveReviewController = require("./controllers/saveReviewController")
    ReviewController = require("./controllers/ReviewController");

    layout = require("express-ejs-layouts");
    db = require("./models/index");

const bodyParser = require('body-parser'); // 바디 파서 (Post Mapping)
const flash = require("connect-flash");

    app.use(bodyParser.urlencoded({extended:true})); // req.body 사용 가능
    app.use(bodyParser.json());

    app.set("port", process.env.port || 3000);
    app.set("view engine", "ejs"); // 뷰 엔진으로 ejs 선택
    
    /** 로그인 페이지 */
    app.get("/towalking/login", loginController.loginGet); 
    app.post("/towalking/login", loginController.loginPost);

    /** 회원가입 페이지 */
    app.get("/towalking/signup", loginController.signupGet); 
    app.post("/towalking/signup", loginController.signupPost);
    
    /** [투월킹] 산책로 상세 페이지에 정적 이미지 사용 */
    app.use("/towalking/:user_id/:id/tw_detail", express.static('public'));
    /** tw_num에 맞는 산책로의 정보를 가져옴 */
    app.get("/towalking/:user_id/:id/tw_detail", DetailController.getTWTrailDetails);
    
    /** [사용자] 산책로 상세 페이지에 정적 이미지 사용 */
    app.use("/towalking/:user_id/:id/user_detail", express.static('public'));
    /** tw_num에 맞는 산책로의 정보를 가져옴 */
    app.get("/towalking/:user_id/:id/user_detail", DetailController.getUSERTrailDetails);

    /**[사용자] 산책로 등록 페이지 */
    app.get("/TrailTeg/:user_id", TrailTegController.getTrailTeg);
    app.post("/TrailTeg/:user_id", TrailTegController.saveTrailTeg);


    /**[사용자] 산책로 리뷰 상세 페이지 */
    app.get("/userReview/:id",ReviewController.getUserReviewList);
    app.get("/twReview/:id",ReviewController.getTwReviewList);

    app.use("/towalking/:user_id/list", express.static('public'));
    app.get("/towalking/:user_id/list", ListController.trailList); // 투월킹 제공 산책로 리스트
    app.get("/towalking/:user_id/list/userList", ListController.userList); // 사용자 등록 산책로 리스트
    app.get("/towalking/:user_id/list/:user_tw_geo", ListController.trailFilterList); // 투월킹 제공 산책로 지역 필터링
    app.get("/towalking/:user_id/list/userList/:user_tw_geo", ListController.trailFilterUserList); // 사용자 등록 산책로 지역 필터링
  
    app.post("/towalking/:user_id/:id/twtrail/like", LikeController.tw_updateLike); // 투월킹 제공 산책로 공감 post action
    app.post("/towalking/:user_id/:id/usertrail/like", LikeController.user_updateLike); // 사용자 등록 산책로 공감 post action
  
    app.get("/towalking/usertrail/:user_id/:id/writereview", writereviewController.sendFormOfuserid); // 사용자 후기 등록 페이지
    app.get("/towalking/twtrail/:user_id/:id/writereview", writereviewController.sendFormOftwid); // 투월킹 후기 등록 페이지

    app.post("/towalking/usertrail/:user_id/:id/writereview", saveReviewController.user_saveReview); // 사용자 후기 등록 post action 처리
    app.post("/towalking/twtrail/:user_id/:id/writereview", saveReviewController.tw_saveReview); // 투월킹 제공 등록 post action 처리

/** 에러 처리 */
app.use(errorController.logError);
app.use(errorController.respondInternalError);
app.use(errorController.respondNoResourceFound);
   
app.listen(port, () => {
    console.log("The Express.js server has started...");
});