'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    errorHandler = require('./errors.server.controller'),
    Product = mongoose.model('Product'),
    _ = require('lodash');

/**
 * Create a product
 */
exports.create = function(req, res) {
	var product = new Product(req.body);

	product.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.status(201).json(product);
		}
	});
};

/**
 * Show the current Product
 */
exports.read = function(req, res) {

};

/**
 * Update a Product
 */
exports.update = function(req, res) {

};

/**
 * Delete an Product
 */
exports.delete = function(req, res) {

};

/**
 * List of Products
 */

exports.list = function(req, res) {
    Product.find().exec(function(err, products) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.json(products);
        }
    });
};