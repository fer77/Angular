// MODULE
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

// ROUTES
weatherApp.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'pages/home.html',
    controller: 'homeController'
  })
  .when('/forecast', {
    templateUrl: 'pages/forecast.html',
    controller: 'forecastController'
  })
  .when('/forecast/:days', {
    templateUrl: 'pages/forecast.html',
    controller: 'forecastController'
  })
});

// SERVICES
weatherApp.service('cityService', function() {
	this.city = 'Salt Lake City';
});

// CONTROLLERS
weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService) {
	$scope.city = cityService.city;

	$scope.$watch('city', function() {
		cityService.city = $scope.city;
	});
}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService) {
	$scope.apiKey = '6f5a071d58e4bfb4d5f7310070e1ff94'
	$scope.city = cityService.city;
	// gets the days from the route if it exists otherwise default is 2 days.
	$scope.days = $routeParams.days || 2;
	$scope.weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast?', {callback: 'JSON_CALLBACK'}, {get: {method: 'JSONP'}});
	$scope.weatherResult = $scope.weatherAPI.get({q: $scope.city, cnt: $scope.days, appid: $scope.apiKey});

	$scope.convertToFahrenheit = function(degK) {
		return Math.round((1.8 * (degK - 273)) + 32) + ' F';
	}
	$scope.convertToDate = function(dt) {
		// javascript Date opbject:
		return new Date(dt * 1000);
	}
}]);
