const express = require('express');

const app = express();

// app.get: matches the entire request url
app.get('/favicon.ico', (req, res) => res.status(204));

app.use((req, res, next) => {
	console.log('In the middleware');
	next(); // Allows the request to continue to the next middleware in line
});


// app.use: matches the starting of the request url
// http://localhost:8080/products OR http://localhost:8080/products/1 will go to this middleware
app.use('/products', (req, res, next) => {
	console.log('In the another middleware');
	res.send('<h1>Hello to our Products</h1>')
});

app.use('/', (req, res, next) => {
	console.log('In the another middleware');
	res.send('<h1>Hello from Express</h1>')
});

app.listen(8080); // this line of code is equivalent to the two following statements

// const server = http.createServer(app);
// server.listen(8080);