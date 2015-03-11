angular.module('family', ['ngRoute'])
	.config(function($routeProvider){
		$routeProvider
		.when('/family', {
			templateUrl: 'views/table.html',
			controller: 'FamilyController',
			controllerAs: 'family'
		})
		.when('/family/new', {
			templateUrl: 'views/form.html',
			controller: 'FamilyController',
			controllerAs: 'family'
		})
		.when('/family/:uuid', {
			templateUrl: 'views/show.html',
			controller: 'ShowController',
			controllerAs: 'show'
		})
		.when('/family/:uuid/edit', {
			templateUrl: 'views/form.html',
			controller: 'EditController',
			controllerAs: 'family'
		})
		.otherwise({
			redirectTo: '/family'
		})
	})

	.factory('famFactory', function($http) {
		var exports = {},
        	FIREBASE_URL = 'https://familyapp.firebaseio.com';

        exports.findOne = function (id, cb) {
	        $http
				.get(FIREBASE_URL + '/family/' + id + '.json')
				.success(function (data){
					cb(data);
				});
        };

        exports.findAll = function (cb) {
	        $http
				.get(FIREBASE_URL + '/family.json')
				.success(function(data){
					cb(data);

				});
        };

        exports.create = function (data, cb) {
        	$http
				.post(FIREBASE_URL + '/family.json', data)
			    .success(function(res){
			      cb(res);
			    })
		};

		exports.update = function (id, data, cb) {
			var url = FIREBASE_URL + '/family/' + id + '.json';

			$http
			.put(url, data)
			.success(function (res){
				if (typeof cb === 'function') {
					cb(res)
				}
			});
		};

		exports.delete = function (id, cb) {
			var url = FIREBASE_URL + '/family/' + id + '.json';

			$http.delete(url)
			.success(function(){
				cb();
			});
		}

        return exports;
	})

	.controller('EditController', function($routeParams, famFactory, $location){
		var family = this,
			id     = $routeParams.uuid;

		famFactory.findOne(id, function (data) {
			family.newFam = data;
		})

		family.cohortOptions = [
	      'N/A',
	      'One',
	      'Two',
	      'Three',
	      'Four',
	      'Five',
	      'Six',
	      'Seven',
	      'Eight',
	      'Nine',
	      'Ten'
	    ];

		family.addorEditFam = function (){
			famFactory.update(id, family.newFam, function () {
				$location.path('/family')
			});
		};

	})

	.controller('ShowController', function($routeParams, famFactory) {
		var family = this,
			id     = $routeParams.uuid;

		famFactory.findOne(id, function (data) {
			family.data = data;
		});
	})

	.controller('FamilyController', function($scope, famFactory, $location){
		var family = this;


	    family.cohortOptions = [
	      'N/A',
	      'One',
	      'Two',
	      'Three',
	      'Four',
	      'Five',
	      'Six',
	      'Seven',
	      'Eight',
	      'Nine',
	      'Ten'
	    ];

	    famFactory.findAll(function (exports) {
	    	family.data = exports;
	    })



		family.addorEditFam = function () {
			family.newFam.name;
			family.newFam.firstName;
			family.newFam.middleName;
			family.newFam.lastName;
			family.newFam.current;

			famFactory.create(family.newFam, function (res) {
				family.data[res.name] = family.newFam;
			     $location.path('/family')
			});
		};


		family.removeFamily = function (id) {
			famFactory.delete(id, function (){
				delete family.data[id];
			});
		};

		family.updateFam = function (id) {
			famFactory.update(id, family.data[id])
		};

	});

