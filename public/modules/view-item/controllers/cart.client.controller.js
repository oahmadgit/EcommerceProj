'use strict';

angular.module('view-item').controller('CartController1', ['$scope','ngCart','$stateParams', '$location', 'Authentication', 'Products', 'Categories','Users', '$filter',
	function($scope,ngCart,$stateParams, $location, Authentication, Products, Categories,Users, $filter) {
		$scope.authentication = Authentication;
		$scope.categories = Categories.query();
		$scope.users = Users.query();
		$scope.currentPage = 1;
		$scope.pageSize = 10;
		$scope.offset = 0;
		ngCart.setTaxRate(7.5);
  		ngCart.setShipping(2.99);



		// Page changed handler
		$scope.pageChanged = function() {
			$scope.offset = ($scope.currentPage - 1) * $scope.pageSize;

		};
			// $scope.cartUpdate = function(value){
		// 	//$scope.total = $scope.total+1;
		// 	//value = $scope.total;
		// 	messages.items.push(messages.value);
		// 	//console.log(messages.value);
		// }	
		

		  var appendCategory = function appendCategory(p) {
			// You could substitue use of filter here with underscore etc.
			p.category = $filter('filter')($scope.categories, {_id: p.category})[0];
			p.user = $filter('filter')($scope.users, {_id: p.user})[0];
		};

		  // Find existing Product
		$scope.findOne = function() {
			$scope.product = Products.get({
				productId: $stateParams.productId
			}, appendCategory);
		};

	}




]);
