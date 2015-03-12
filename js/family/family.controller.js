angular
	.module('family')
	.controller('FamilyController', FamilyController);

function FamilyController($scope, famFactory, $location, COHORT_OPTIONS){
	var family = this;

    family.cohortOptions = COHORT_OPTIONS;

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
			// family.data[res.name] = family.newFam;
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

}