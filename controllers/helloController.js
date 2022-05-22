exports.helloController = (req, res) => {
    res.render("index", {name : req.params.name});
}