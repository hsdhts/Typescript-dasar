import { Category, Product } from "../src/type-alias";

describe('type alias', function() {
    it('should support in JavaScript', function() {
        const category: Category = {
            id : 1,
            name : 'Handphone'
        };

        const product: Product = {
            id : 1,
            name: "Handphone",
            price : 10000,
            category: category
        }

        console.info(category)
        console.info(product)
    })
})