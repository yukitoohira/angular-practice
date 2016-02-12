describe('Jasmine Basic', function () {
    beforeEach(function () {
        console.log('Hello,Jasmine!');
    });

    it('Basic Test', function () {
        expect(1 + 1).toEqual(2);
    });
});