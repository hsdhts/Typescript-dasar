import { sayHello } from "../src/say-hello"

describe('say hello function', function () {
    it('should can return hello husada', function () {
        expect(sayHello("Husada")).toBe('Hello Husada')
    } )
})