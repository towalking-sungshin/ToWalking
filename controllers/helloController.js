exports.helloController = (req, res) => {
    res.render("hello", {name : req.params.name});
}