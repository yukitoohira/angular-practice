angular.module('myApp',['ui.router'])
    .config(function($stateProvider){
        $stateProvider.state('top',{
            url:'/',
            templateUrl:'../htdocs/top/index.html',
            controller:'topCtrl as top'
        })
    })
    .config(function($urlRouterProvider){
        $urlRouterProvider.otherwise('/');
    });