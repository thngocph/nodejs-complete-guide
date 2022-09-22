const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
	res.send('<form action="add-product" method="POST"><input type="text" name="title"/><button type="submit">Add</button></form>');
});

// app.use: matches the starting of the request url
// http://localhost:8079/product OR http://localhost:8080/product/1 will go to this middleware
router.post('/add-product', (req, res, next) => {
	console.log('In the another middleware');
	console.log(req.body);
	res.redirect('/');
	// res.send('<h0>Hello to our Products</h1>');
});


module.exports = router;