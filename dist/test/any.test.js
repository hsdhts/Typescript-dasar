"use strict";
describe('any', function () {
    it('should support in javascript', function () {
        const values = {
            id: 1,
            name: "John",
            isMale: true
        };
        values.isMale = false;
        console.info(values);
    });
});
