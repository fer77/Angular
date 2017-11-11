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
  .when('/second/:num', {
    templateUrl: 'pages/second.html',
    controller: 'secondController'
  })
});

myApp.service('nameService', function() {
  var self = this;

  this.name = 'Linda Belcher';

  this.nameLength = function() {
    return self.name.length;
  };
});

myApp.controller('mainController', ['$scope', '$log', 'nameService', function($scope, $log, nameService) {
  // $log.info($location.path());
 $scope.message = 'You are on the main page';
 $scope.name = nameService.name;

 $scope.$watch('name', function() {
  nameService.name = $scope.name;
  });

 $log.log(nameService.name);
 $log.log(nameService.nameLength());
}]);

myApp.controller('secondController', ['$scope', '$location', '$log', '$routeParams', 'nameService', function($scope, $location, $log, $routeParams, nameService) {
 $scope.message = 'You are on the second page';
 $scope.num = $routeParams.num || '';

 $scope.name = nameService.name;

 $scope.$watch('name', function() {
  nameService.name = $scope.name;
  });
 
}]);
