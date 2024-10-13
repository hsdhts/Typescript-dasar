describe('union', function() {
    it('should can support in javascript', function() {
        let values: string | number | boolean = "Husada";
        
        values = true;
        values =  1;
        console.info(values)
    })

    it('should support typeof operator', function() {
        function process(value: string | number | boolean) {
            if(typeof value === 'string' ) {
                return value.toUpperCase();
            } else if(typeof value === 'number' ) {
                return value + 2
            } else {
                return !value
            }
        }

        expect(process("Husada")).toBe("HUSADA")
        expect(process(4)).toBe(6)
        expect(process(true)).toBe(false)
    })
})