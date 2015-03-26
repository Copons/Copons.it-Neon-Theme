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

//@prepros-append shared/utilities.module.js
//@prepros-append components/skills/skills.module.js
//@prepros-append components/portfolio/portfolio.module.js
//@prepros-append components/resume/resume.module.js