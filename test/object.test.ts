describe('object', () => {
    it('should support in javascript', () => {
        const person: {id: number, name: string, hobbies: string, description?: string} = {
            id : 1,
            name: 'Handphone',
            hobbies : 'Football',
            description: 'Description'
        }

        person.name = 'Buku';
        person.hobbies = 'Futsal'
        console.info(person)
    })
})