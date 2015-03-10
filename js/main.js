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

	.controller('EditController', function($routeParams, $http, $location){
		var family = this,
			id     = $routeParams.uuid;

		$http
			.get('https://familyapp.firebaseio.com/family/' + id + '.json')
			.success(function(data){
				family.newFam = data;
			});

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
		$http
			.put('https://familyapp.firebaseio.com/family/' + id + '.json',
				family.newFam
			)
			.success(function (data){
				$location.path('/family')
			});
		}

	})

	.controller('ShowController', function($routeParams, $http){
		var family = this,
			id     = $routeParams.uuid;

		$http
			.get('https://familyapp.firebaseio.com/family/' + id + '.json')
			.success(function (data){
				family.data = data;
			})


	})
	.controller('FamilyController', function($scope, $http, $location){
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

	  //   $http.put('https://familyapp.firebaseio.com/family.json',
		 //   [
			// {
			// 	name: 'Dotun',
			// 	firstName: 'Adedotun',
			// 	middleName: 'Dee',
			// 	lastName: 'Olusoga',
			// 	current: true,
			// 	family: 1
			// },
			// {
			// 	name: 'Lamide',
			// 	firstName: 'Olamide',
			// 	middleName: 'Busayo',
			// 	lastName: 'Olusoga',
			// 	family: 1
			// },
			// {
			// 	name: 'Deola',
			// 	middleName: 'Adeola',
			// 	firstName: 'Mariam',
			// 	lastName: 'Yusuf',
			// 	family: 2
			// },
			// {
			// 	name: 'Tobi',
			// 	firstName: 'Tobiloba',
			// 	middleName: 'Fatimat',
			// 	lastName: 'Yusuf',
			// 	family: 2
			// },
			// {
			// 	name: 'Tosin',
			// 	firstName: 'Oluwatomisin',
			// 	middleName: 'Adedapo',
			// 	lastName: 'Ademola',
			// 	family: 3
			// },
			// {
			// 	name: 'Tomi',
			// 	firstName: 'Tomilola',
			// 	middleName: '',
			// 	lastName: 'Ademola',
			// 	family: 3
			// },
			// {
			// 	name: 'Tope',
			// 	firstName: 'Temitope',
			// 	middleName: '',
			// 	lastName: 'Ademola',
			// 	family: 3
			// },
			// {
			// 	name: 'Toke',
			// 	firstName: 'Tomiike',
			// 	middleName: '',
			// 	lastName: 'Ademola',
			// 	family: 3
			// }
			// ]);

		$http
			.get('https://familyapp.firebaseio.com/family.json')
			.success(function(data){
				family.data = data;

			});

		family.newFam = {};

		family.addorEditFam = function () {
			family.newFam.name;
			family.newFam.firstName;
			family.newFam.middleName;
			family.newFam.lastName;
			family.newFam.current;


			$http.post('https://familyapp.firebaseio.com/family.json',
				{firstName: family.newFam.firstName, lastName: family.newFam.lastName, img: family.newFam.img})
			    .success(function(data){
			      family.data[data.name] = family.newFam;
			      $location.path('/family');
			    })
		};


		family.removeFamily = function (id) {
			console.log(id);
			// var index = family.data.indexOf(person);
			// family.data.splice(index, 1)
			var url = 'https://familyapp.firebaseio.com/family/' + id + '.json';
			$http.delete(url)
			.success(function(){
				delete family.data[id];
			});
		};

		family.updateFam = function (id) {
			var url = 'https://familyapp.firebaseio.com/family/' + id + '.json';
			$http.put(url, family.data[id]);
		};

		function _clearForm (){
			family.newFam = {};
		}
	});

