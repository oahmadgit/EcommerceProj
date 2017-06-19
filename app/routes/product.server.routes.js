'use strict';

module.exports = function(app) {
	var product = require('../../app/controllers/product.server.controller');

	app.route('/product')
	  .get(product.list)
	  .post(product.create);
};