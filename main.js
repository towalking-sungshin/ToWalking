const port = 3000,
    express = require("express"),
    app = express(), // 웹 서버 애플리케이션 할당
    loginController = require("./controllers/LoginController"),
    errorController = require("./controllers/errorController"),
    DetailController = require("./controllers/DetailController"),
    TrailTegController = require("./controllers/TrailTegController")
    ListController = require("./controllers/ListController")
    const bodyParser = require('body-parser'); // 바디 파서 (Post Mapping)

    app.use(bodyParser.urlencoded({extended:true})); // 이걸 추가해야 undefined 해결됨
    app.use(bodyParser.json());

    app.set("port", process.env.port || 3000);
    app.set("view engine", "ejs"); // 뷰 엔진으로 ejs 선택
    
    /** 로그인 페이지 */
    app.get("/towalking/login", loginController.loginGet); 
    app.post("/towalking/login", loginController.loginPost);
    app.get("/towalking/login_noIdPage", loginController.noId); // 아이디 부재
    app.get("/towalking/login_noPwPage", loginController.noPw); // 잘못된 비밀번호
    
    /** [투월킹] 산책로 상세 페이지에 정적 이미지 사용 */
    app.use("/towalking/:user_id/:id/tw_detail", express.static('public'));
    /** tw_num에 맞는 산책로의 정보를 가져옴 */
    app.get("/towalking/:user_id/:id/tw_detail", DetailController.getTWTrailDetails);
    
    /** [사용자] 산책로 상세 페이지에 정적 이미지 사용 */
    app.use("/towalking/:user_id/:id/user_detail", express.static('public'));
    /** tw_num에 맞는 산책로의 정보를 가져옴 */
    app.get("/towalking/:user_id/:id/user_detail", DetailController.getUSERTrailDetails);

    app.get("/TrailTeg/:user_id", TrailTegController.getTrailTeg);
    app.post("/TrailTeg/:user_id", TrailTegController.saveTrailTeg);

    app.get("/towalking/:user_id/list", ListController.trailList);
    app.get("/towalking/:user_id/list/userList", ListController.userList);
    app.get("/towalking/:user_id/list/:user_tw_geo", ListController.trailFilterList);

/** 에러 처리 */
app.use(errorController.logError);
app.use(errorController.respondInternalError);
app.use(errorController.respondNoResourceFound);
   
app.listen(port, () => {
    console.log("The Express.js server has started...");
});