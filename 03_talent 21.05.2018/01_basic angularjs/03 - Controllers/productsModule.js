

//html יצרנו את המשתנה שנציב בתוך דף ה
//ng-app בתגית 
//<ng-app="productsModule">
var productsModule = angular.module("productsModule", []);

// Creating a controller in that Module.
// The $scope is a variable which its content is automatically 
// known inside each View which declares that Controller.
// Also, the name $scope must be exactly that name:

//<ng-controller="ProductsController">
productsModule.controller("ProductsController", function ($scope) {
    $scope.productID = 1;
    $scope.productName = "Apple";
    $scope.unitPrice = 3.5;

    console.log($scope);
});

//<ng-controller="SecondController">
productsModule.controller("SecondController", function ($scope) {
    $scope.title = "welcome";
});

