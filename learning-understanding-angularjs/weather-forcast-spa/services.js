// SERVICES
weatherApp.service('cityService', function() {
	this.city = 'Salt Lake City';
});

// Weather API
weatherApp.service('weatherService', ['$resource', function($resource) {
	this.GetWeather = function(city, days, apiKey) {
		var weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast?', {callback: 'JSON_CALLBACK'}, {get: {method: 'JSONP'}});
		return weatherAPI.get({q: city, cnt: days, appid: apiKey});
	}
}]);