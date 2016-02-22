var app = angular.module('portfolio', ['ui.router'])

app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    
    $stateProvider.state('home', {
        url:"/",
        templateUrl:'templates/home.html'
               
         
    })
}])