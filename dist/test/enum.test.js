import { CustomerType } from "../src/enum";
describe('enum', () => {
    it('should support in javascript', () => {
        const customer = {
            id: 1,
            name: 'John',
            type: CustomerType.GOLD
        };
        console.info(customer);
    });
});
