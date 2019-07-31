const functions = require('../functions-Tyler')


describe('Tests airplane functions',() => {
    
    it('should be a function',() => {
        expect(typeof functions.deleteAirplane).toBe('function')
    });

    it('should have parameter of string', () => {
        expect(id).toBeInstanceOf(String)
    })

    it('should be a function', () => {
        expect(typeof functions.toggle).toBe('function')
    })

    it('should contain setEdit', () => {
        expect(functions.toggle).toContain('setEdit(!edit)')
    })

    it('it should have a parameter of req and res', () => {
        expect(functions.create(req, res)).toBe('req, res')
    })
})