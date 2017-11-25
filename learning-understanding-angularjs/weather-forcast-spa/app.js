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
    controller: 'foreCastController'
  })
});

// CONTROLLERS
weatherApp.controller('homeController', ['$scope', function($scope) {
	$scope.hello = 'Hello World!'
}]);

weatherApp.controller('foreCastController', ['$scope', function($scope) {
	$scope.hello = 'Hello World!'
}]);
