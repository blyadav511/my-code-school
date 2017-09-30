var homeControllers = angular.module("homeControllers",[]);
homeControllers.controller("homeCtrl", function($scope, $rootScope, $timeout, $location, ConfigAPI){
	

	$scope.a =  ConfigAPI.getStudentData().name;
});