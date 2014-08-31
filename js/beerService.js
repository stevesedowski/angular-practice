(function(){
 


var getBeerService = function($http) {

	var getTheBeer = function() {
		return $http.get('json/beer-list.json')
					.then(function(data) {

						return data;
					});

	};

	return {
		getTheBeer : getTheBeer
	};


};

	var module = angular.module('myApp');
	module.factory('getBeerService', getBeerService);

}());



