import { Employee, Manager } from "../src/employee"
import { Domain } from "../src/intersection-types"
import { Person } from "../src/person2"
import { Seller } from "../src/seller"
// import { Person2 } from "../src/person2

describe('interface', () => {
    it('should support in javacript', () => {
        const seller: Seller = {
            id : 1,
            name : 'John',
            address: 'Indonesia',
            nib: "1234",
            npwp: "123"
        }
        console.info(seller)
    })

    it('should support function interface', () => {
        interface addFunction {
            (value1: number, value2: number ): number ;
        }

        const add: addFunction = (value1: number , value2: number) : number => {
            return value1 + value2;
        }

        console.info(add(2,2))
    })

    it('should support indexable interface', () => {
        interface StringArray {
            [index: number] : string
        }

        const names : StringArray = ["Something", "Else", "Nobody"]

        console.info(names)
        console.info(names[0])
        console.info(names[1])
        console.info(names[2])
    })

    it('should support indexable interface for non number index', () => {
        interface StringDictionary {
            [key: string] : string
        }

        const dictionary : StringDictionary = {
            firstName : "John",
            lastName : "Doe"
        }

        expect(dictionary["firstName"]).toBe("John")
        expect(dictionary["lastName"]).toBe("Doe")
        console.info(dictionary)
    })

    it('should support extending interfacee', () => {
        const employee : Employee = {
            id : 1,
            name : 'John',
            division : 'IT'
        }

        console.info(employee)

        const manager: Manager = {
            id : 1,
            name : 'John',
            division : 'IT',
            numberOfEmployee : 1234
        }

        console.info(manager)
    })

    it('should support function in interface', () => {
        const person: Person = {
            id : 1,
            name : "Husada",
            sayHello: function(name: string) : string  {
                return `Hello ${name}, my name is ${this.name}`
            }
        }

        console.info(person.sayHello("Budi"))
    })

    it('should support intersection types in interface', () => {
        const domain: Domain = {
            id : 1,
            name: "John"
        }

        console.info(domain)
    })

    it('should support types assertion', () => {
        const person: any = {
            name: "John",
            age: 30
        }

        const person2: Person = person as Person;
        // person2.sayHello("Budi")
        console.info(person2)
    })
})