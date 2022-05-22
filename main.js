const port = 3000,
    express = require("express"),
    app = express(), // 웹 서버 애플리케이션 할당
    helloController = require("./controllers/helloController"),
    errorController = require("./controllers/errorController"),
    layouts = require("express-ejs-layouts");

app.set("port", process.env.port || 3000);
app.set("view engine", "ejs"); // 뷰 엔진으로 ejs 선택
app.use(layouts);

app.get("/hello/:name", helloController.helloController);


/** 에러 처리 */
app.use(errorController.logError);
app.use(errorController.respondInternalError);
app.use(errorController.respondNoResourceFound);
   
app.listen(port, () => {
    console.log("The Express.js server has started...");
});