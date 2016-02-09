//originファイルはモジュール名だけを宣言し、各モジュールは別ファイルとして管理する
angular.module('ArticleApplication', ['ui.router'])
    .config(function ($stateProvider) {
        $stateProvider.state('top', {
            url: '/',
            templateUrl: 'templates/contents.html',
            controller: 'ArticleController as ctrl'
        })
    });