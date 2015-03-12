angular
	.module('family')
	.config(authConfig)
	.run(privateRoutes);

function authConfig($routeProvider){
	$routeProvider
		.when('/login', {
			templateUrl: 'js/auth/login.html',
			controller: 'AuthController',
			controllerAs: 'auth',
			resolve: {
				data: function (authFactory, $location) {
					if (authFactory.isLoggedIn()) {
						$location.path('/family')
					}
				}
			}
		})
		.when('/logout', {
			template: '',
			controller: 'LogoutController'
		});
}

function privateRoutes($rootScope, $location, authFactory) {
	$rootScope.$on('$routeChangeStart', function (event, nextRoute) {


		if (loginRequired()) {
			$location.path('/login');
		}
		function loginRequired () {
			return nextRoute.$$route && nextRoute.$$route.private && !authFactory.isLoggedIn();
		}
	});
}

