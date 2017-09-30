angular.module("myCodeSchool.services", ["ngResource"]).
factory("ConfigAPI", function($http){
	var ConfigAPI = {};

	ConfigAPI.getStudentData = function(){
		console.log("=============:HERE IN SERVICE");
		return {"name":"Babu"};
	}

	return ConfigAPI;
});