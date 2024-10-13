"use strict";
describe('tipe data array', function () {
    it('should same with javascript', function () {
        const names = ["a", "b", "c", "d"];
        const values = [1, 2, 3, 4];
        console.log(names);
        console.log(values);
    });
    it('should support with readonly array', function () {
        const hobbies = ["Futsal", "Voli"];
        console.log(hobbies);
        console.log(hobbies[0]);
        console.log(hobbies[1]);
        // hobbies[0] = "Main game"
    });
    it('should support with tuple ', function () {
        const values = ["a", "b", 1];
        console.log(values);
        console.log(values[0]);
        console.log(values[1]);
        console.log(values[2]);
        // console.log(values[3])
    });
});
