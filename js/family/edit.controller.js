angular
	.module('family')

	.controller('EditController', EditController);

	function EditController($routeParams, famFactory, $location, COHORT_OPTIONS){
		var family = this,
			id     = $routeParams.uuid;

		famFactory.findOne(id, function (data) {
			family.newFam = data;
		})

		family.cohortOptions = COHORT_OPTIONS;

		family.addorEditFam = function (){
			famFactory.update(id, family.newFam, function () {
				$location.path('/family')
			});
	};

	}