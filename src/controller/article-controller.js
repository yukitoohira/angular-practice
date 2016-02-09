angular.module('ArticleApplication').controller('ArticleController', ['MockHeaders', function (MockHeaders) {

    this.message = 'Hello,Module-resolved angularJs!';
    this.headers = MockHeaders();
}]);