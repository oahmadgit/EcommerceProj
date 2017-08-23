'use strict';

module.exports = function(app) {
	var products = require('../controllers/product.server.controller');
	var users = require('../controllers/users.server.controller');

		app.route('/products')
 		.get(products.list)
        .post(users.requiresLogin, products.create);

	app.route('/products/:productId')
		.get(products.read)
		.put(users.requiresLogin, products.update)
		.delete(users.requiresLogin, products.delete);

	// Finish by binding the article middleware
	app.param('productId', products.productByID);

};