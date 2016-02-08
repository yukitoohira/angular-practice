var app = angular.module('ArticleApplication', []);

app.controller('ArticleController', function () {
    this.message = 'Hello,Angular!';

    this.headers = makeHeader();

    function makeHeader() {
        const ret = [];
        ret.push({
            id: 1,
            title: 'hoge'
        });
        ret.push({
            id: 2,
            title: 'foo'
        });
        return ret;
    };
});

app.directive('myHello', function () {
    return {
        restrict: 'E',
        template: '<h1>Hello,MyDirective!</h1>'
    }
});