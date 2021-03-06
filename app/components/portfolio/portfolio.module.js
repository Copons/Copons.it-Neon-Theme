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

			$scope.openWork = function (slug) {
				$('[data-work="' + slug + '"]').show().animate({
					marginLeft: 0
				}, function () {
					$('body').css({overflow:'hidden'});
					workSwiper = new Swiper('.swiper-container', {
						loop: true,
						initialSlide: 0,
						nextButton: '.swiper-button-next',
						prevButton: '.swiper-button-prev',
						preloadImages: false,
						lazyLoading: true,
						slidesPerView: 1,
						spaceBetween: 15,
						grabCursor: true
					});
				});
			};

			$scope.closeWork = function (slug) {
				$('[data-work="' + slug + '"]').animate({
					marginLeft: '100%'
				}, function () {
					$(this).hide();
					$('body').css({overflow:'auto'});
				});
			};

		}])

		.directive('portfolioList', function () {
			return {
				restrict: 'E',
				templateUrl: 'app/components/portfolio/portfolio-view.html',
				controller: 'PortfolioController',
				controllerAs: 'portfolio'
			};
		});

})();