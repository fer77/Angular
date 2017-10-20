var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {
    
    $scope.handle = '';
    
    $scope.toLowerCase = function() {
        
        return $filter('lowercase')($scope.handle);
    };
    
    $scope.characters = 5;
    
    $scope.rules = [
        { rulename: "Must be 5 characters long" },
        { rulename: "Must not be use elsewhere" },
        { rulename: "Must be cool" }
    ];
    
//    console.log($scope.rules);
}]);