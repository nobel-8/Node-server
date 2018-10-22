var http = require('http');

http.createServer(function (req, res) {
    if (err) throw err;
   console.log(err)
    res.writeHead(200, {'Content-Type': 'text/html'});
   // res.write('Hello World');
    res.end('Hello World!');

}).listen(8000);