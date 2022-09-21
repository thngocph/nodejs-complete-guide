const http = require('http');
const routes = require('./routes');

const requestListener = (req, res) => {
	console.log(req.url, req.method, req.headers);
	// process.exit(); // will exit the event loop and the server is stopped!
	// res.writeHead(200);
	// res.end("Hello, World!");

	//routes(req,res);
}

console.log(routes.someText);

// const server = http.createServer(requestListener);
const server = http.createServer(routes.handler);
server.listen(8080);