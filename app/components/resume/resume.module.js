(function(){

	angular.module('resume')

		.factory('ResumeFactory', ['$q', '$http', function ResumeFactory ($q, $http) {

			var resume = {};

			resume.list = [];

			resume.work = {};

			resume.getList = function () {
				var deferred = $q.defer();
				$http.get('app/components/resume/resume.json')
					.success(function (data) {
						resume.list = data;
						deferred.resolve(data);
					})
					.error(function (data) {
						deferred.reject(data);
					});
				return deferred.promise;
			};

			return resume;

		}])

		.controller('ResumeController', ['$scope', 'ResumeFactory', function ($scope, ResumeFactory) {

			this.list = [];

			ResumeFactory.getList()
				.then(angular.bind(this, function then() {
					this.list = ResumeFactory.list;
				}));

		}])

		.directive('resumeList', function () {
			return {
				restrict: 'E',
				templateUrl: 'app/components/resume/resume-view.html',
				controller: 'ResumeController',
				controllerAs: 'resume'
			};
		});

})();