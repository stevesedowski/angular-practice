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
			.otherwise({redirectTo: 'http://www.infowars.com'});

		}])

		.controller('appCtrl', function($scope, VERSION){
			$scope.version = VERSION;
		})

		.controller('homeCtrl', ['$scope', function($scope){
			$scope.title = "AngularJS Training | Angular Course | Learn Angular";
			$scope.getInfo = function(){
				return  "This information is derived via the controller";
			};
		}])
		.controller('infoCtrl', ['$scope', function($scope){
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