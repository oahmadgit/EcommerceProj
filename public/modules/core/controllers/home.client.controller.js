'use strict';


angular.module('core').controller('HomeController', ['$window','$scope', '$stateParams', '$location', 'Authentication', 'Products', 'Categories','Users', '$filter',
	function($window,$scope, $stateParams, $location, Authentication, Products, Categories, Users, $filter) {
		$scope.authentication = Authentication;
		$scope.categories = Categories.query();
		$scope.users = Users.query();
		$scope.currentPage = 1;
		$scope.pageSize = 10;
		$scope.offset = 0;



		// Page changed handler
		$scope.pageChanged = function() {
			$scope.offset = ($scope.currentPage - 1) * $scope.pageSize;

		};
	
		// $scope.Cats = ["ac","aa"];

		var appendCategory = function appendCategory(p) {
			// You could substitue use of filter here with underscore etc.
			p.category = $filter('filter')($scope.categories, {_id: p.category})[0];
			p.user = $filter('filter')($scope.users, {_id: p.user})[0];
		};

	//  $scope.seeDesc = function(prodID){
	// 	//myApp.setValue(pro)
	// 	 //HeaderController.value = prodID; 
	// 	 messages.value= prodID;
	// 	 $window.location.href = '#!/item/'+prodID;
	//  }

		// Find a list of Products
		$scope.find = function() {
			Products.query(function loadedProducts(products) {
			products.forEach(appendCategory);
				$scope.products = products;
			});
			// 	Products.query().$promise.then(function(res){
			// var arr=[];
			// var data = res;
			// for(var x=0;x<data.length;x++){
			// 	if(data[x].userId == $scope.authentication.user.email){
			// 		arr.push(data[x]);
			// 	}
			// }
			// arr.forEach(appendCategory);
			// $scope.products = arr;
		// });
		};

		// Find existing Product
		$scope.findOne = function() {
			$scope.product = Products.get({
				productId: $stateParams.productId
			}, appendCategory);
		};
		// Search for a product
		$scope.productSearch = function(product) {
			$location.path('item/' + product._id);
		};

	}
]);