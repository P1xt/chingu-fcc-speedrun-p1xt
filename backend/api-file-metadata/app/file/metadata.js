module.exports = {
    parse: function (req, res) {
        let requestData = {
            "size": req.file.size
        }

        res.send(requestData);
    }
}