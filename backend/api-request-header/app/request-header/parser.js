module.exports = {
    parse: function (req, res) {
        let requestData = {
            "ipaddress": req.headers['x-forwarded-for'].split(',')[0] || 
                         req.connection.remoteAddress.split(',')[0],
            "language":  req.headers['accept-language'].split(',')[0],
            "software":  req.headers['user-agent'].split(') ')[0].split(' (')[1]
        }

        res.send(requestData);
    }
}