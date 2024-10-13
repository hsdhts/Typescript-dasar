describe('type alias', function () {
    it('should support in JavaScript', function () {
        const category = {
            id: 1,
            name: 'Handphone'
        };
        const product = {
            id: 1,
            name: "Handphone",
            price: 10000,
            category: category
        };
        console.info(category);
        console.info(product);
    });
});
export {};
