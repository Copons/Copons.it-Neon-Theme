(function(){

	angular.module('skills')

		.factory('SkillsFactory', ['$http', function SkillsFactory ($http) {

			var skills = null;

			return function () {
				if (skills) {
					return skills;
				}
				else {
					skills = $http.get('app/components/skills/skills.json');
					return skills;
				}
			};

		}])

		.controller('SkillsController', ['$scope', 'SkillsFactory', function ($scope, SkillsFactory) {

			SkillsFactory().success(function(data) {
				$scope.skills = data;
			});

		}])

		.directive('skillsList', function () {
			return {
				restrict: 'C',
				templateUrl: 'app/components/skills/skills-view.html',
				controller: 'SkillsController'
			};
		});

})();