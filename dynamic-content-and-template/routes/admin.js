const path = require('path');
const express = require('express');
const router = express.Router();

const rootDir = require('../util/path');

const products = [];

router.get('/add-product', (req, res, next) => {
	// res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
	res.render('add-product', {pateTitle: 'Add Product'});
});

// app.use: matches the starting of the request url
// http://localhost:8079/product OR http://localhost:8080/product/1 will go to this middleware
router.post('/add-product', (req, res, next) => {

	products.push({title: req.body.title});
	console.log(req.body.title);
	res.redirect('/');
});


module.exports.products = products;
module.exports.routers = router;