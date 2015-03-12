angular
	.module('family')
	.config(familyConfig);

function familyConfig($routeProvider){
	$routeProvider
		.when('/family', {
			templateUrl: 'js/family/table.html',
			controller: 'FamilyController',
			controllerAs: 'family',
			private: true
		})
		.when('/family/new', {
			templateUrl: 'js/family/form.html',
			controller: 'FamilyController',
			controllerAs: 'family',
			private: true
		})
		.when('/family/:uuid', {
			templateUrl: 'js/family/show.html',
			controller: 'ShowController',
			controllerAs: 'show'
		})
		.when('/family/:uuid/edit', {
			templateUrl: 'js/family/form.html',
			controller: 'EditController',
			controllerAs: 'family',
			private: true
		})
		.otherwise({
			redirectTo: '/family'
		})
}