var module = angular.module("myApp", ['ngRoute']);

module.config(['$routeProvider', function ($routeProvider) {

    // the : - is placeholder to dinamyc parameters
    $routeProvider
        .when('/countries', {
            templateUrl: 'countries.html',
            controller: 'CountriesController'
        })
        .when('/country/:nameParam', {
            templateUrl: 'country.html',
            controller: 'CountryController'
        })
        .otherwise({
            redirectTo: '/countries'
        });
}]);

module.controller("CountriesController", function ($scope, $http) {
    $scope.countryList = [];
    $http.get("https://restcountries.eu/rest/v2/all?fields=name;flag")
        .success((res) => {
            $scope.countryList = res;
        });

});

module.controller("CountryController", function ($scope, $routeParams,$http) {
    $scope.countryInfo={};
    $scope.nameParam = $routeParams.nameParam;
    $http.get("https://restcountries.eu/rest/v2/name/"+$scope.nameParam+"?fullText=true")
    .success((res) => {
        $scope.countryInfo = res[0];
    });

});