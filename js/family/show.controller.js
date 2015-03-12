angular
	.module('family')
	.controller('ShowController', ShowController);

	function ShowController($routeParams, famFactory) {
		var family = this,
			id     = $routeParams.uuid;

		famFactory.findOne(id, function (data) {
			family.data = data;
		});
	}