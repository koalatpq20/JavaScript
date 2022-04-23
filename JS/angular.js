
var app = angular.module("app", ['ngRoute']);

app.config(['$routeProvider' ,function($routeProvider){
    $routeProvider
    .when('/home',
    {
        controller: 'introCtrl',
        templateUrl: 'Partials/View1.html'
    })
    .when('/v2',
    {
        controller: 'introCtrl',
        templateUrl: 'Partials/View2.html'
    })
    .otherwise({ redirectTo: '/home' });
}]);

app.controller("introCtrl", introCtrl);

function introCtrl($scope){
    var person = {
        name: "Jane",
        age: 30,
        friends: [ 
            //"Sarah", "Thomas", "Jerry"
            {name: "Sarah", age: 40},
            {name: "Thomas", age: 20},
            {name: "Jerry", age: 30}
        ]
    }

    $scope.Person = person;
}

//Short register
//app.controller("introlCtrl", function($scope){});