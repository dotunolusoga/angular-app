angular
	.module('family')
	.controller('AuthController', AuthController)

function AuthController($rootScope, $scope, $location, authFactory, BASE_URL) {
	var family      = this;

      family.user = {};

  family.login = function () {

  	authFactory.login(family.user, function (err, authData) {
  		if (err) {
  			console.log('Error logging in user:', err);
  		} else {
  			console.log('Logged in Successfully', authData);
        $rootScope.user = authData;
  			$location.path('/family');
  			$scope.$apply();
  		}
  	});
  };

  family.register = function () {

  	authFactory.register(family.user, function (err, authData) {
  		if (err && err.code === "EMAIL_TAKEN") {
  			console.log('Dooface!!!! Dont you mean "LOGIN"!!!!', err);
  			family.login();
  		} else if (err) {
  			console.log('Error creating user:', err);
  		} else {
  			console.log('User created Successfully', authData);
  			family.login();
  		}
  	});
  };

  family.forgotPassword = function () {

  	authFactory.forgotPassword(family.user, function (err) {
  		if (err) {
  			console.log('Error resetting password!!', err);
  		} else {
  			console.log('Password reset. Email successfully');
  			family.login();
  		}
  	});
  };

}