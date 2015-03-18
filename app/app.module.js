(function(){

	angular.module('skills', []);
	angular.module('portfolio', []);

	var app = angular.module('copons', [
		'ngSanitize',
		'skills',
		'portfolio'
	]);

})();