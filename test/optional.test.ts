describe('optional null and undefined', () => {
    it('should can support in javascript', () => {
        function sayHello(name?: string) {
            if(name) {
                console.info(`Hello ${name}`);
            } else {
                console.info('Hello')
            }

        }
        // sayHello("Husada");
        const name : string | undefined = undefined;
        sayHello(name)
    })
})