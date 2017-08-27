'use strict';

angular.module('core').controller('HeaderController', ['$scope', 'Authentication', 'Menus','ngCart',
	function($scope, Authentication, Menus,ngCart) {
		//$scope.messages = messages.items; 
		//$scope.total = $scope.messages.items == null ? 0 : $scope.messages.items.length;
		$scope.authentication = Authentication;
		$scope.isCollapsed = false;
		$scope.value=null;

		$scope.menu = Menus.getMenu('topbar');

		$scope.toggleCollapsibleMenu = function() {
			$scope.isCollapsed = !$scope.isCollapsed;
		};

		// $scope.AddCart = function(){
			
		// 	console.log(myApp.value);
		// }
		// 	$scope.$watch(function(){
		// 	return messages.items;
		// 	}, function(newValue, oldValue){
		// 		console.log(newValue + ' ' + oldValue);
		// 		console.log(messages.items);
		// 	});
		

		// Collapsing the menu after navigation
		$scope.$on('$stateChangeSuccess', function() {
			$scope.isCollapsed = false;
		});
	}
]);