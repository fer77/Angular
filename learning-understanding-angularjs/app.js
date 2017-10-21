var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$http', function($scope, $filter, $http) {

    $scope.handle = '';

    $scope.toLowerCase = function() {

        return $filter('lowercase')($scope.handle);
    };

    $scope.characters = 5;

    // $scope.rules = [
    //     { rulename: "Must be 5 characters long" },
    //     { rulename: "Must not be use elsewhere" },
    //     { rulename: "Must be cool" }
    // ];

    $http.get('https://swapi.co/api/people/')
         .success(function(result) {
          //  console.log(result.results);
           $scope.people = result.results;
         })
         .error(function(data, status) {
           console.log(data);
         });

//    console.log($scope.rules);

    $scope.alertClick = function() {

        alert('Clicked!!');
    }

    $scope.name = 'Bob Belcher';
}]);
