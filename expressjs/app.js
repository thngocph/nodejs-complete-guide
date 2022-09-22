const express = require('express');
const bodyParser = require('body-parser');
const path = require ('path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

// app.get: matches the entire request url
app.get('/favicon.ico', (req, res) => res.status(204));

app.use(bodyParser.urlencoded({extended: true}));

app.use((req, res, next) => {
	console.log('In the middleware');
	next(); // Allows the request to continue to the next middleware in line
});

app.use('/admin', adminRoutes);

app.use(shopRoutes);

app.use((req, res, next) => {
	res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(8080); // this line of code is equivalent to the two following statements

// const server = http.createServer(app);
// server.listen(8080);