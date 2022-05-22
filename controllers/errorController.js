const httpStatus = require("http-status-codes"); // 설치

exports.logError = (error, req, res, next) => {
    console.error(error.stack);
    next(error);
};

exports.respondNoResourceFound = (req, res) => { // 잘못된 주소 접근
    let errorCode = httpStatus.NOT_FOUND;
    res.status(errorCode);
    res.sendFile(`./views/${errorCode}.html`, {
        root: "./"
    });
};

exports.respondInternalError = (error, req, res, next) => { // 서버 내부 문제 발생
    let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
    console.log(`ERROR occured: ${error.stack}`);
    res.status(errorCode);
    res.send(`Sorry, our application is experiencing a problem.`);
}