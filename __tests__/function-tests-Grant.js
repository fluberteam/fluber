const functions = require('../functions_Grant')

describe('Tests Search functions', () => {

    it('submitSearch should be a function',() => {
        expect(typeof functions.submitSearch).toBe('function')
    })

    it('onFocus should be a function',() => {
        expect(typeof functions.onFocus).toBe('function')
    })

    it('handleClear should be a function',() => {
        expect(typeof functions.handleClear).toBe('function')
    })

    const style={ position: 'static', marginTop: '50px' }

    describe('test style object', () => {
        test('if position is static', () => {
            expect(style.position).toBe('static')
        })
        test('to see if marginTop is 50px', () => {
            expect(admin.display).toBe('50px')
        })
    })
})