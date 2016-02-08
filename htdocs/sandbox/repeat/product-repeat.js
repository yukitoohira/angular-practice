angular.module('ProductRepeatApp', [])
    .controller('ProductRepeatController', ['ProductValue', function (ProductValue) {
        this.products = ProductValue();
    }]).value('ProductValue', function () {
    var ret = [];
    ret.push({
        id: 1,
        name: 'AweSome Book',
        price: '100'
    });
    ret.push({
        id: 2,
        name: 'Awesome PC',
        price: '999'

    });

    return ret;
});