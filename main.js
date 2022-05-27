const port = 3000,
    express = require("express"),
    app = express(), // 웹 서버 애플리케이션 할당
    helloController = require("./controllers/helloController"),
    errorController = require("./controllers/errorController"),
    DetailController = require("./controllers/DetailController")
    layouts = require("express-ejs-layouts");

    
    app.set("port", process.env.port || 3000);
    app.set("view engine", "ejs"); // 뷰 엔진으로 ejs 선택
    
    
    app.get("/hello/:name", helloController.helloController);
    
    /** [투월킹] 산책로 상세 페이지에 정적 이미지 사용 */
    app.use("/towalking/:id/tw_detail", express.static('public'));
    /** tw_num에 맞는 산책로의 정보를 가져옴 */
    app.get("/towalking/:id/tw_detail", DetailController.getTWTrailDetails);
    
    /** [사용자] 산책로 상세 페이지에 정적 이미지 사용 */
    app.use("/towalking/:id/user_detail", express.static('public'));
    /** tw_num에 맞는 산책로의 정보를 가져옴 */
    app.get("/towalking/:id/user_detail", DetailController.getUSERTrailDetails);


/** 에러 처리 */
app.use(errorController.logError);
app.use(errorController.respondInternalError);
app.use(errorController.respondNoResourceFound);
   
app.listen(port, () => {
    console.log("The Express.js server has started...");
});