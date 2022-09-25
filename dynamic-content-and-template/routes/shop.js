const path = require('path');
const express = require('express');
const router = express.Router();

const rootDir = require('../util/path');
const adminData = require('./admin');

router.get('/', (req, res, next) => {
	// console.log('In the last middleware');
	// res.sendFile(path.join(rootDir, 'views', 'shop.html'));
	const products = adminData.products;
	res.render('shop', { prods: products, pageTitle: 'Shop', path: '/', hasProducts: products.length > 0,
						 activeShop: true, productCSS: true
					   });
	// path is for checking active link in pug. hasProducts is for checking if there's product in hbs
});

module.exports = router;