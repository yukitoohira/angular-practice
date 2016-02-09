angular.module('ArticleApplication').value('MockHeaders',function(){
    var ret=[];
    ret.push({
        id: 1,
        title: 'hoge'
    });
    ret.push({
        id: 2,
        title: 'foo'
    });
    return ret;
});