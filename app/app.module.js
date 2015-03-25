(function(){

	angular.module('utilities', []);
	angular.module('skills', []);
	angular.module('portfolio', []);
	angular.module('resume', []);

	var app = angular.module('copons', [
		'ngSanitize',
		'ngAnimate',
		'angular-loading-bar',
		'utilities',
		'skills',
		'portfolio',
		'resume'
	]);

})();