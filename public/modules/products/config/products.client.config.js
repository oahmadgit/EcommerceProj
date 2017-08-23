'use strict';

// Products module config
angular.module('products').run(['Menus',
	function(Menus) {
		Menus.addMenuItem('topbar', 'My Products', 'products', 'dropdown', '/products(/create)?');
		Menus.addSubMenuItem('topbar', 'products', 'View your products', 'products');
		Menus.addSubMenuItem('topbar', 'products', 'Add New Products', 'create-products');

	}
]);