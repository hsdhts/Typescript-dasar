import { Customer, CustomerType } from "../src/enum"

describe('enum', () => {
    it('should support in javascript', () => {
        const customer: Customer = {
            id: 1,
            name: 'John',
            type: CustomerType.GOLD
        }

        console.info(customer)
    })
})