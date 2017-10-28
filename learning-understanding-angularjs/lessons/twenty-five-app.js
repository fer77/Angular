var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', function($scope) {
  $scope.name = 'main controller';
}]);

myApp.controller('secondController', ['$scope', function($scope) {
  $scope.name = 'second controller';
}]);
