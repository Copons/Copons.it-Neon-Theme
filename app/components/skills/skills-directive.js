(function(){

	angular.module('skills')
		.directive('skillsList', function(){
			return {
				restrict: 'C',
				templateUrl: 'app/components/skills/skills-view.html'
			};
		});

})();