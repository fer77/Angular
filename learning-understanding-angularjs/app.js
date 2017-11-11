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

}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {

}]);

myApp.directive('searchResults', function() {
  return {
    //This will be our directive.
    restrict: 'AECM',
    template: '<a href="#" class="list-group-item list-group-item-action flex-column align-items-start"><div class="d-flex w-100 justify-content-between"><h5 class="mb-1">List group item heading</h5><small class="text-muted">3 days ago</small></div><p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p><small class="text-muted">Donec id elit non mi porta.</small></a>',
    replace: true
  }
});