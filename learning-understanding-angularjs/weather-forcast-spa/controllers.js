// CONTROLLERS
weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService) {
	$scope.city = cityService.city;

	$scope.$watch('city', function() {
		cityService.city = $scope.city;
	});

	$scope.submit = function() {
		$location.path('/forecast');
	};
}]);

weatherApp.controller('forecastController', ['$scope', '$routeParams', 'cityService', 'weatherService', function($scope, $routeParams, cityService, weatherService) {
	$scope.apiKey = '6f5a071d58e4bfb4d5f7310070e1ff94'
	$scope.city = cityService.city;
	// gets the days from the route if it exists otherwise default is 2 days.
	$scope.days = $routeParams.days || '2';
	$scope.weatherResult = weatherService.GetWeather($scope.city, $scope.days, $scope.apiKey);

	$scope.convertToFahrenheit = function(degK) {
		return Math.round((1.8 * (degK - 273)) + 32) + ' F';
	}
	$scope.convertToDate = function(dt) {
		// javascript Date opbject:
		return new Date(dt);
	}
}]);