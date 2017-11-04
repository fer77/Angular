var myApp = angular.module('myApp', ['ngRoute']);

// $routeProvider is available, because ng-Route is included in the application
myApp.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'pages/main.html',
    controller: 'mainController'
  })
  .when('/second', {
    templateUrl: 'pages/second.html',
    controller: 'secondController'
  })
});

myApp.controller('mainController', ['$scope', '$location', '$log', function($scope, $location, $log) {
  // $log.info($location.path());
 $scope.message = 'You are on the main page';
}]);

myApp.controller('secondController', ['$scope', '$location', '$log', function($scope, $location, $log) {
 $scope.message = 'You are on the second page';
}]);
