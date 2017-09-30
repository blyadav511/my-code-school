"use strict";
var myCodeSchool = angular.module("myCodeSchool", [
	"ngRoute",
	"ngAnimate",
	"ngCookies",
	"ngFlash",
	"ngSanitize",
	"homeControllers",
	"myCodeSchool.services"
]);

myCodeSchool.config(["$routeProvider",
	function($routeProvider){
		$routeProvider.
		when("/home", {
			templateUrl : "partials/home.html",
			controller: "homeCtrl",
		});
}]).run(function($rootScope, $location, $window){

});