"use strict";
describe('function', () => {
    it('should support in javascript', () => {
        function sayHello(name) {
            return `Hello ${name}`;
        }
        expect(sayHello("Budi")).toBe("Hello Budi");
        function sayHi(name) {
            console.log(`Hello ${name}`);
        }
        sayHi("Dimas");
    });
    it('should support with default value', () => {
        function sayHello(name = "Guest") {
            return `Hello ${name}`;
        }
        expect(sayHello()).toBe("Hello Guest");
        expect(sayHello('Something')).toBe("Hello Something");
    });
    it('should support with rest parameter', () => {
        function sum(...values) {
            let total = 0;
            for (const value of values) {
                total += value;
            }
            return total;
        }
        expect(sum(1, 2, 3, 4, 5)).toBe(15);
    });
});
