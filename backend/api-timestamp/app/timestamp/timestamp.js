const moment = require('moment');

module.exports = {
    parse: function (req, res) {
        const date = req.params.query;
        let processedDate = {
            "unix": null,
            "natural": null
        }
        if (+date >= 0) {
            processedDate.unix = +date;
            processedDate.natural = moment.unix(+date).format("MMMM D, YYYY")
        }
        if (isNaN(+date) && moment(date, "MMMM D, YYYY").isValid()) {
            processedDate.unix = moment(date, "MMMM D, YYYY").format("X");
            processedDate.natural = date;
        }
        res.send(processedDate);
    }
}