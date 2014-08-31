(function(){
	angular.module('myApp', ['ngRoute'])

		.constant('VERSION', '1.0')

		.config(['$routeProvider', function($routeProvider){
			$routeProvider
			.when('/', {
				controller : 'homeCtrl', 
				templateUrl : 'home.html'
			})
			.when('/info', {
				controller : 'infoCtrl',
				templateUrl : 'info.html'
			})
			.when('/color', {
				controller : 'dynamicCtrl',
				templateUrl : 'color.html'
			})
			.when('/slides', {
				controller : 'slideCtrl',
				templateUrl : 'slides.html'
			})
			.when('/include', {
				controller : 'includeCtrl', 
				templateUrl : 'include.html'
			})
			.when('/form', {
				controller : 'formCtrl',
				templateUrl : 'form.html'
			})
			.when('/beer', {
				controller : 'beerCtrl', 
				templateUrl : 'beer.html'
			})
			.otherwise({redirectTo: 'http://www.infowars.com'});

		}])
/* The FACTORY ---------------------------------------------------------------------------------------------> */

		.factory('mainFactory', function(){

			var user;

			return {
				setUserName : function(current) {
					user = current;
				},
				getUserName : function() {
					return user;
				}
			};
		})

		// .controller('beerCtrl', ['$scope', 	'getBeerService', function($scope, getBeerService){
		// 	var onSuccess = function(data){
				
		// 		$scope.beers = data;
				
		// 	};
		// 	var errorMsg = function(error){
		// 		$scope.error = error;
		// 	};

		// 	getBeerService.getTheBeer().then(onSuccess, errorMsg);
			
		// }])

.controller("beerCtrl", function($scope, $http){
	// $scope.beers = [
	// 	{name: 'Cieling Bliss Ale', price: 4.99, dateAdded: new Date()},
	// 	{name: 'Light Ale Fix', price: 8.87, dateAdded: new Date()},
	// 	{name: 'Heavy Ale Fix', price: 9.87, dateAdded: new Date()},

	var result = $http.get('js/beer-list.json');
		result.success(function(data){
			$scope.beers = data.beers;
		});

	$scope.pluralizer = 
	{
			0: 'All out of Beer!!',
			1: 'Only ONE beer left...',
			2: 'Two Beers Left. Stock up, dude...',
			other: '{} beers left. Cheers...'
	}

	// getBeer = function($scope, $http) {
	// 	var result = $http.get('http://wiredbuzzmedia.com/js/beer-list.json');
	// 	result.success(function(data){
	// 		$scope.beers = data;
	// 	});
	// }

	$scope.addBeer = function(){
		$scope.newBeer = 
		{
			name: $scope.beerName, price: $scope.beerPrice, dateAdded: new Date()
		}
		$scope.beers.push($scope.newBeer);
		$scope.beerName = '';
		$scope.beerPrice = '';
		
	}
	$scope.removeBeer = function(beer) {
		if(confirm("Do you want to get rid of this beer?")){
			$scope.beers.splice($scope.beers.indexOf(beer),1);	
		}
		
	}
})

		.controller('userCtrl', ['$scope', 'mainFactory', function($scope, mainFactory) {
			mainFactory.setUserName('Henry Rothchild');
			$scope.user = mainFactory.getUserName();
		}])

		.controller('appCtrl', function($scope, VERSION){
			$scope.version = VERSION;
		})

		.controller('formCtrl', ['$scope', function($scope){
			$scope.title = "This is a great form. Fill it out and be amazed"
			$scope.getAges = function(){
				var ages = [];
				
				for (var i = 18; i < 100; i++) {
					ages.push(i);	
				};

				return ages;
			};
			$scope.submitForm = function(){
				if($scope.myForm.$valid){
					console.log($scope.name + ' Age: ' + $scope.age)
				} else {
					console.log("not valid");
				}
				
			};
		}])

		.controller('homeCtrl', ['$scope', function($scope){
			$scope.title = "AngularJS Training | Angular Course | Learn Angular";
			$scope.getInfo = function(){
				return  "This information is derived via the controller";
			};
		}])
		.controller('infoCtrl', ['$scope', 'mainFactory', function($scope, mainFactory){
			$scope.title = "This is the Info Page...";
			$scope.getInfo = function(){
				return  "This information is derived via the controller";
			};

		}])	

		.controller('slideCtrl', ['$scope', function($scope){
			$scope.title = "Working with ng-switch...Very Cool!";
		}])	

		.controller('includeCtrl', ['$scope', function($scope){
			$scope.title = "This page is all about ng-include..."
		}])

		.controller('dynamicCtrl', ['$scope', function($scope){

			$scope.title = "This is yet another example of AngularJS and its use of ng-repeat and ng-show";

			$scope.showColors = function() {
				$scope.values = ['yellow', 'red', 'blue', 'purple', 'grey', 'black'];
			}

			$scope.showStates = function() {
				$scope.values = ['Texas', 'Alabama', 'Florida', 'Arizona', 'New Mexico', 'California'];
			}

			$scope.getValues = function() {
				return $scope.values;
			}

			$scope.hideInfo = function() {
				$scope.values = '';
			}
		}])

		.run(['VERSION', '$rootScope', function(VERSION, $rootScope){
			
			
		}]);
})();