var url = require('url');
var log = require('./log')(module);

module.exports = function (req, res) {
    var urlParsed = url.parse(req.url, true);

    log.info("Got request", req.method, req.url);

    var message = urlParsed.query.message;
    if (req.method == 'GET' && urlParsed.pathname == '/echo' && message) {
        log.debug("Echo: " + message);
        res.end(message);
        return;
    };
    
    log.error("Unknown URL");

    res.statusCode = 404;
    res.end("Not found");
}