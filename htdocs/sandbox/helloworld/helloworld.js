angular.module('HelloApp', [])
    .controller('HelloController', function () {
        this.name = 'NoName'; //$scope is Deprecated.Use this
    });