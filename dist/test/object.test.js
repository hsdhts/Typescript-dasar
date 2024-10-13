"use strict";
describe('object', () => {
    it('should support in javascript', () => {
        const person = {
            id: 1,
            name: 'Handphone',
            hobbies: 'Football',
            description: 'Description'
        };
        person.name = 'Buku';
        person.hobbies = 'Futsal';
        console.info(person);
    });
});
