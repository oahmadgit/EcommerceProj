'use strict';

//Setting up route
angular.module('view-item').config(['$stateProvider',
	function($stateProvider) {
		// View item state routing
		$stateProvider.
		state('allcart', {
			url: '/mycart',
			templateUrl: 'modules/view-item/views/allcart.client.view.html'
		}).
		state('items', {
			url: '/item/:productId',
			templateUrl: 'modules/view-item/views/items.client.view.html'
		});
	}
]);