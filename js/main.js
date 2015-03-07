(function () {
	var family = angular.module('family', []);

	family.controller('FamilyController', function($scope){
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

		family.data = [
		{
			name: 'Dotun',
			firstName: 'Adedotun',
			middleName: 'Dee',
			lastName: 'Olusoga',
			current: true,
			family: 1
		},
		{
			name: 'Lamide',
			firstName: 'Olamide',
			middleName: 'Busayo',
			lastName: 'Olusoga',
			family: 1
		},
		{
			name: 'Deola',
			middleName: 'Adeola',
			firstName: 'Mariam',
			lastName: 'Yusuf',
			family: 2
		},
		{
			name: 'Tobi',
			firstName: 'Tobiloba',
			middleName: 'Fatimat',
			lastName: 'Yusuf',
			family: 2
		},
		{
			name: 'Tosin',
			firstName: 'Oluwatomisin',
			middleName: 'Adedapo',
			lastName: 'Ademola',
			family: 3
		},
		{
			name: 'Tomi',
			firstName: 'Tomilola',
			middleName: '',
			lastName: 'Ademola',
			family: 3
		},
		{
			name: 'Tope',
			firstName: 'Temitope',
			middleName: '',
			lastName: 'Ademola',
			family: 3
		},
		{
			name: 'Toke',
			firstName: 'Tomiike',
			middleName: '',
			lastName: 'Ademola',
			family: 3
		}
		];

		family.newFam = {};

		family.addFam = function () {
			family.newFam.name;
			family.newFam.firstName;
			family.newFam.middleName;
			family.newFam.lastName;
			family.newFam.current;

			family.data.push(family.newFam);
			_clearForm();
		}


		family.removeFamily = function (person) {
			var index = family.data.indexOf(person);
			family.data.splice(index, 1)
		}

		function _clearForm (){
			family.newFam = {};
		}
	})
})();
