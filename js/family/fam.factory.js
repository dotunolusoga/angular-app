angular
	.module('family')
	.factory('famFactory', famFactory);

	function famFactory($http, BASE_URL) {
	var exports = {};

  exports.findOne = function (id, cb) {
    $http
			.get(BASE_URL + '/family/' + id + '.json')
			.success(function (data){
				cb(data);
			});
  };

  exports.findAll = function (cb) {
    $http
			.get(BASE_URL + '/family.json')
			.success(function(data){
				cb(data);

			});
  };

  exports.create = function (data, cb) {
  	$http
			.post(BASE_URL + '/family.json', data)
	    .success(function(res){
	      cb(res);
	    })
	};

	exports.update = function (id, data, cb) {
		var url = BASE_URL + '/family/' + id + '.json';

		$http
		.put(url, data)
		.success(function (res){
			if (typeof cb === 'function') {
				cb(res)
			}
		});
	};

	exports.delete = function (id, cb) {
		var url = BASE_URL + '/family/' + id + '.json';

		$http.delete(url)
		.success(function(){
			cb();
		});
	}

    return exports;
}