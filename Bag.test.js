const Bag = require('./Bag')

describe('Bag class', () => {
    //bag has weight
    test('bag has weight', () => {
        const bag = new Bag(10)
        expect(bag.weight).toBe(10)
    })
    //if bag has no weight, return error
    test('bag has no weight to return an error', () => {
        expect(() => new Bag()).toThrowError('bag needs weight')
    })

    test('should throw an error if the bag is too heavy', () => {
        expect(() => new Bag(24)).toThrow('Bag is too heavy!');
    })
})