var http = require('http');
var url = require('url');

var server = new http.Server(function (req, res) {    
    console.log(req.headers);

    var urlParsed = url.parse(req.url, true);
    if (urlParsed.pathname == '/echo' && urlParsed.query.message) {
        res.statusCode = 200;
        res.setHeader('Cache-Control', 'no-cache');
        res.end(urlParsed.query.message);
    } else {
        res.statusCode = 404;
        res.end("Page not found");
    }
});

server.listen(3000, '127.0.0.1');