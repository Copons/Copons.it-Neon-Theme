(function(){

	angular.module('portfolio')

		.factory('PortfolioFactory', ['$q', '$http', function PortfolioFactory ($q, $http) {

			var portfolio = {};

			portfolio.list = [];

			portfolio.work = {};

			portfolio.getList = function () {
				var deferred = $q.defer();
				$http.get('app/components/portfolio/works.json')
					.success(function (data) {
						portfolio.list = data;
						deferred.resolve(data);
					})
					.error(function (data) {
						deferred.reject(data);
					});
				return deferred.promise;
			};

			return portfolio;

		}])

		.controller('PortfolioController', ['$scope', 'PortfolioFactory', function ($scope, PortfolioFactory) {

			this.list = [];

			PortfolioFactory.getList()
				.then(angular.bind(this, function then() {
					this.list = PortfolioFactory.list;
				}));

		}])

		.directive('portfolioList', function () {
			return {
				restrict: 'E',
				templateUrl: 'app/components/portfolio/portfolio-view.html',
				controller: 'PortfolioController',
				controllerAs: 'portfolio'
			};
		});



		/*.factory('PortfolioFactory', ['$q', '$http', '$location', function PortfolioFactory ($q, $http, $location) {

			var portfolio = {};

			portfolio.works = [];

			portfolio.work = {};

			portfolio.getWorks = function () {
				var deferred = $q.defer();
				$http.get('app/components/portfolio/works.json')
					.success(function (data) {
						portfolio.works = data;
						deferred.resolve(data);
					})
					.error(function (data) {
						deferred.reject(data);
					});
				return deferred.promise;
			};

			portfolio.getWork = function (slug) {
				var deferred = $q.defer();
				$http.get('app/components/portfolio/works.json')
					.success(function (data) {
						angular.forEach(data, function (item) {
							if (item.slug == slug) {
								portfolio.work = item;
							}
						});
						deferred.resolve(data);
					})
					.error(function (data) {
						deferred.reject(data);
					});
				return deferred.promise;
			};

			return portfolio;

		}]);;*/

})();