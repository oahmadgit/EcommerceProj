'use strict';

//Setting up route
angular.module('products').config(['$stateProvider',
	function($stateProvider) {
		// Products state routing
		$stateProvider.
		state('edit-product', {
			url: '/products/:productId/edit',
			templateUrl: 'modules/products/views/edit-product.client.view.html'
		}).
		state('view-products', {
			url: '/products/:productId',
			templateUrl: 'modules/products/views/view-products.client.view.html'
		}).
		state('create-products', {
			url: '/create-products',
			templateUrl: 'modules/products/views/create-products.client.view.html'
		}).
		state('products', {
			url: '/products',
			templateUrl: 'modules/products/views/products.client.view.html'
		});
	}
]);