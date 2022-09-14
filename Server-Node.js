const http = require('http');
const fs = require('fs');

const requestListener = (req, res) => {
	console.log(req.url, req.method, req.headers);
	// process.exit(); // will exit the event loop and the server is stopped!
	// res.writeHead(200);
	// res.end("Hello, World!");

	const url = req.url;
	const method = req.method;

	if (url === '/') {
		res.setHeader('Content-Type', 'text/html');
		res.write('<html>');
		res.write('<head><title>Enter Message</title></head>');
		res.write('<body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">Send</button></form></body');
		res.write('</html>');
		return res.end();
	}

	// redirect from /message to /
	if (url == '/message' && method === 'POST') {
		const body = [];
		req.on('data', chunk => {
			console.log(chunk);
			body.push(chunk);
		});

		// return here IMPORTANT to stop the code continue running the next line 43. Remove it and the code doesn't work (Episode: Understanding Event Driven Code Execution)
		return req.on('end', () => {
			const parsedBody = Buffer.concat(body).toString();
			const message = parsedBody.split('=')[1];
			fs.writeFileSync('message.txt', message);
			
			// return res.writeHead(302, { Location: '/path' }).end(); is equivalent to three following statements
			res.statusCode = 302;
			res.setHeader('Location', '/');
			return res.end();
		});
	}

	res.setHeader('Content-Type', 'text/html');
	res.write('<html>');
	res.write('<head><title>My First Page</title></head>');
	res.write('<body><h1>Hello from my Server-Node.js Server!</h1></body');
	res.write('</html>');
	res.end();
}

const server = http.createServer(requestListener);
server.listen(8080);