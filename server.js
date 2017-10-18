var http = require('http');
var debug = require('debug')('server');

var server = new http.createServer();

server.on('request', require('./request'));

server.listen(3000);

debug("Server is running");