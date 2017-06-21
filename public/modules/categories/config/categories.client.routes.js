'use strict';

//Setting up route
angular.module('categories').config(['$stateProvider',
	function($stateProvider) {
		// Categories state routing
		$stateProvider.
		state('edit-category', {
			url: '/edit-category',
			templateUrl: 'modules/categories/views/edit-category.client.view.html'
		}).
		state('view-category', {
			url: '/view-category',
			templateUrl: 'modules/categories/views/view-category.client.view.html'
		}).
		state('create-category', {
			url: '/create-category',
			templateUrl: 'modules/categories/views/create-category.client.view.html'
		}).
		state('categories', {
			url: '/categories',
			templateUrl: 'modules/categories/views/categories.client.view.html'
		});

}
]);