angular
.module('family', [])
.controller('FamilyController', function($scope){
	var family = this;

	family.data=['Dotun', 'Deola', 'Tobi', 'Tosin', 'Tomi', 'Tope', 'Toke'];

	family.removeFamily = function () {
		var index = family.indexOf(name);
		family.data.splice(index, 1)
	}
})

