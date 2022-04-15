const filter = require('../src/filter')

describe('filter', () => {
    test('should return [ 2, 4, 6 ]', () => {
        const arr = [1,2,3,4,5,6]
        expect(
            filter(arr, (val) => val % 2 === 0)
        ).toEqual([ 2, 4, 6 ])
    })

    test('should return [ 1, 3, 5 ]', () => {
        const arr = [1,2,3,4,5,6]
        expect(
            filter(arr, (val) => val % 2 !== 0)
        ).toEqual([ 1, 3, 5 ])
    })

    test('should return [ 3, 4, 5, 6 ]', () => {
        const arr = [1,2,3,4,5,6]
        expect(filter(
            arr, (val) => val > 2)
        ).toEqual([ 3, 4, 5, 6 ])
    })
})