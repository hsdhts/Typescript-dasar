"use strict";
describe('optional null and undefined', () => {
    it('should can support in javascript', () => {
        function sayHello(name) {
            if (name) {
                console.info(`Hello ${name}`);
            }
            else {
                console.info('Hello');
            }
        }
        // sayHello("Husada");
        const name = undefined;
        sayHello(name);
    });
});
