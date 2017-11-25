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

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
  $scope.people = [
      {
        name: 'Bob Belcher',
        address: '123 Burger ln',
        city: 'ocean view',
        state: 'MA',
        zip: '12345'
      },
      {
        name: 'Linda Belcher',
        address: '123 Burger ln',
        city: 'ocean view',
        state: 'MA',
        zip: '12345'
      },
      {
        name: 'Tina Belcher',
        address: '123 Burger ln',
        city: 'ocean view',
        state: 'MA',
        zip: '12345'
      }
    ]
  $scope.formattedAddress = function(person) {
    return person.address + ', ' + person.city + ', ' + person.state + ' ' + person.zip;
  }
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {

}]);

myApp.directive('searchResults', function() {
  return {
    //This will be our directive.
    restrict: 'AECM',
    templateUrl: 'directives/search-results.html',
    replace: true,
    scope: {
      personObject: "=",
      formattedAddressFunction: "&"
    },
    transclude: true
  }
});