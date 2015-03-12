angular
	.module('family')
	.filter('object2Array', function () {
		return function(obj) {
			return Object.keys(obj).map(function (key) {
				return obj[key];
			}, []);
		};
	})
	.filter('toRansomCase', function (){
		return function (element) {
			element
			.split('')
			.map(function (chars, i) {
				if (i % 2 === 0) {
					return char.toUpperCase();
				} else {
					return char.toLowerCase();
				}
			})
			.join()
		};
	})