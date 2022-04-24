
var module = angular.module("myModule", []);

//Register a service via Provider
module.provider("myProvider", function(){
    this.msg = "Provider Msg";
    
    this.setMsg = function(newMsg){
        this.msg = newMsg;
    }

    //Provider return singleton object via $get function
    this.$get = function(){
        return this.msg;
    }
});

// module.config(['myProvider', function(myProvider){
//     myProvider.setMsg("Provider Msg Configured");
// }]);

//Register a service via factory
module.factory("myFactory", function(){
    //Factory return singleton object via function    
    return "Factory msg";
});

//Register service via service
module.service("myService", function(){
    var getValue = function(){
        return "Service msg";
    };
    return getValue;
});

var person = {
    name: 'Jane',
    age: 30
}

module.value("myValue", person);

module.controller("myController", function(myProvider, myFactory, myService, myValue, $scope){
    console.log("myController " + myProvider);
    $scope.msgProvider = myProvider;
    $scope.msgFactory = myFactory;
    $scope.msgService = myService;
    $scope.msgValue = myValue.name;
});

module.controller("myController2", function(myProvider, myFactory, myService, myValue, $scope){
    console.log("myController " + myProvider);
    $scope.msgProvider = myProvider;
    $scope.msgFactory = myFactory;
    $scope.msgService = myService;
    $scope.msgValue = myValue.name;
});