(function(){

	angular.module('utilities')

		.controller('CopyrightDateController', ['$scope', function ($scope) {
			$scope.copyrightDate = new Date().getFullYear();
			if ($scope.copyrightDate != '2015') {
				$scope.copyrightDate = '2015-' + $scope.currentDate;
			}
		}]);

})();