// import { Person2 } from "../src/person2
describe('interface', () => {
    it('should support in javacript', () => {
        const seller = {
            id: 1,
            name: 'John',
            address: 'Indonesia',
            nib: "1234",
            npwp: "123"
        };
        console.info(seller);
    });
    it('should support function interface', () => {
        const add = (value1, value2) => {
            return value1 + value2;
        };
        console.info(add(2, 2));
    });
    it('should support indexable interface', () => {
        const names = ["Something", "Else", "Nobody"];
        console.info(names);
        console.info(names[0]);
        console.info(names[1]);
        console.info(names[2]);
    });
    it('should support indexable interface for non number index', () => {
        const dictionary = {
            firstName: "John",
            lastName: "Doe"
        };
        expect(dictionary["firstName"]).toBe("John");
        expect(dictionary["lastName"]).toBe("Doe");
        console.info(dictionary);
    });
    it('should support extending interfacee', () => {
        const employee = {
            id: 1,
            name: 'John',
            division: 'IT'
        };
        console.info(employee);
        const manager = {
            id: 1,
            name: 'John',
            division: 'IT',
            numberOfEmployee: 1234
        };
        console.info(manager);
    });
    it('should support function in interface', () => {
        const person = {
            id: 1,
            name: "Husada",
            sayHello: function (name) {
                return `Hello ${name}, my name is ${this.name}`;
            }
        };
        console.info(person.sayHello("Budi"));
    });
    it('should support intersection types in interface', () => {
        const domain = {
            id: 1,
            name: "John"
        };
        console.info(domain);
    });
    it('should support types assertion', () => {
        const person = {
            name: "John",
            age: 30
        };
        const person2 = person;
        // person2.sayHello("Budi")
        console.info(person2);
    });
});
export {};
