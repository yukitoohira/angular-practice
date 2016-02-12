/**
 * Created by yukito.ohira on 2016/02/09.
 */
angular.module('ArticleApplication').directive('myHello', function () {
    return {
        restrict: 'E',
        template: '<h1>Hello,MyDirective(This is resolved by angular-di)!</h1>'
    }
});

angular.module('ArticleApplication').directive('myHoge', function () {
    return {
        restrict: 'E',
        templateUrl: 'contents.html'
    }
});