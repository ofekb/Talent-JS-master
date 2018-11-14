var module = angular.module("myApp", ['ngRoute']);

module.config(['$routeProvider', function ($routeProvider) {

    // the : - is placeholder to dinamyc parameters
    $routeProvider
        .when('/route1/:x1/:x2', {
            templateUrl: 'route1.html',
            controller: 'RoutingController'
        })
        .when('/route2/:y1/:y2', {
            templateUrl: 'route2.html',
            controller: 'RoutingController1'
        })
        .otherwise({
            redirectTo: '/route1/0/0'
        });
}]);

module.controller("RoutingController", function ($scope, $routeParams) {

    $scope.x1 = $routeParams.x1;
    $scope.x2 = $routeParams.x2;
});

module.controller("RoutingController1", function ($scope, $routeParams) {
    
    $scope.y1 = $routeParams.y1;
    $scope.y2 = $routeParams.y2;
});