var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$timeout', function($scope, $timeout) {
    
    // Whatever sits on the scope becomes availablel in the view, inside the html attached to the controller.
    $scope.name = 'Bob';

    $timeout(function() {
    	$scope.name = 'Belchers';
    }, 3000);
    
}]);