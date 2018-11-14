
    var productsModule = angular.module("productsModule", []);

    productsModule.controller("ProductsController", function ($scope) {

	
        // Adding JSON object as a Model:
        $scope.topProduct = {
            productID: 0,
            productName: "Apple",
            unitPrice: 3.5
        };
		
        // Adding JSON array as Model:
        $scope.products = [
            {
                productID: 1,
                productName: "Apple",
                unitPrice: 3.5
            },
            {
                productID: 2,
                productName: "Banana",
                unitPrice: 4.7
            },
            {
                productID: 3,
                productName: "Peach",
                unitPrice: 2.3
            }
        ];
    });

