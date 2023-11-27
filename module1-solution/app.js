(function() {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject =['$scope'];

function LunchCheckController($scope){
    $scope.message = "hola";
    $scope.checkIfTooMuch = function(){
        //console.log($scope.dishes);
        var messageDishes = countDishes($scope.dishes);
        $scope.message = messageDishes;
    };

    function countDishes(dishes){
        //Validating empty item
        var splitDishes = dishes.split(',').filter((str) => str !== '');
        var numberDishes = splitDishes.length;
        var message;

        //console.log(numberDishes);

        if(numberDishes == 0)
        {
            message = "Please enter data first";
        }
        else if(numberDishes <= 3 )
        {
            message = "Enjoy!";
        }
        else
        {
            message = "Too much!";
        }
        //console.log(message);
        return message;        
    };
}
})();