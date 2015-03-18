(function(){

	angular.module('skills')

		.factory('SkillsFactory', ['$q', '$http', function SkillsFactory ($q, $http) {

			var skills = {};

			skills.list = [];

			skills.getList = function () {
				var deferred = $q.defer();
				$http.get('app/components/skills/skills.json')
					.success(function (data) {
						skills.list = data;
						deferred.resolve(data);
					})
					.error(function (data) {
						deferred.reject(data);
					});
				return deferred.promise;
			};

			return skills;

		}])

		.controller('SkillsController', ['SkillsFactory', function (SkillsFactory) {

			this.list = [];

			SkillsFactory.getList()
				.then(angular.bind(this, function then() {
					this.list = SkillsFactory.list;
				}));
			
		}])

		.directive('skillsList', function () {
			return {
				restrict: 'C',
				templateUrl: 'app/components/skills/skills-view.html',
				controller: 'SkillsController',
				controllerAs: 'skills'
			};
		});

})();