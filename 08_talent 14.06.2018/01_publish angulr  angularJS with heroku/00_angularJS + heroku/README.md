
# Country project (`angularjs`)

## project goals:
* ajax request
* routing in spa
* node server - to serve the angularJS proj

##  See live demo:
https://cryptic-basin-87987.herokuapp.com/#/countries

## The following code is for routing:

```javascript
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
```
