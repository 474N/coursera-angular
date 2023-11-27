(function() {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject =['$scope'];

function LunchCheckController($scope){
    $scope.checkIfTooMuch = function(){
        //console.log($scope.dishes);
        var messageDishes = countDishes($scope.dishes);
        $scope.message = messageDishes;
    };

    function countDishes(dishes){
        //Validating empty item
        console.log(dishes);
        if(dishes === undefined || dishes === '')
        {
            return "Please enter data first";
        }
        var splitDishes = dishes.split(',').filter((str) => str !== '');
        var numberDishes = splitDishes.length;

        //console.log(numberDishes);

        if(numberDishes <= 3 )
        {
            return "Enjoy!";
        }
        else
        {
            return "Too much!";
        }      
    };
}
})();