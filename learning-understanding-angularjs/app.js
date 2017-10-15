var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {
    
    $scope.handle = '';
    
    $scope.toLowerCase = function() {
        
        return $filter('lowercase')($scope.handle);
    };
    
    
    $scope.$watch('handle', function(newValue, oldValue) {
        
        console.log('***********digest cycle***********');
        console.log('Old value: ' + oldValue);
        console.log('New value: ' + newValue);
    });
    
}]);