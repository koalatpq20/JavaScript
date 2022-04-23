
var app = angular.module("app", []);
app.controller("introCtrl", introCtrl);

function introCtrl($scope){
    var person = {
        name: "Jane",
        age: 30,
        friends: [ "Sarah", "Thomas", "Jerry"]
    }

    $scope.Person = person;
}

//Short register
//app.controller("introlCtrl", function($scope){});