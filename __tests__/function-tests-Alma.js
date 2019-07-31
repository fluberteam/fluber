const functions = require('../functions-Alma')

describe('Tests flight functions', () => {

    it('deleteFlight should be a function', () => {
        expect(typeof functions.deleteFlight).toBe('function')
    })

    it('toggle should be a function', () => {
        expect(typeof functions.toggle).toBe('function')
    })

    it('createFlight should be a function', () => {
        expect(typeof functions.createFlight).toBe('function')
    })

    const admin = {
        alignItems: 'center',
        textDecoration: 'none'
    }

    describe('testing admin object', () => {
        test('if align items is center', () => {
            expect(admin.alignItems).toBe('center')
        })

        test('if text decoration has a value of none', () => {
            expect(admin.textDecoration).toBe('none')
        })
    })

})