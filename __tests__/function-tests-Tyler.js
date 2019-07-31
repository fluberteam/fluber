const functions = require('../functions-Tyler')


describe('Tests airplane functions',() => {
    
    it('deleteAirplane should be a function',() => {
        expect(typeof functions.deleteAirplane).toBe('function')
    });

    it('toggle should be a function',() => {
        expect(typeof functions.toggle).toBe('function')
    });

    it('create should be a function',() => {
        expect(typeof functions.create).toBe('function')
    });

    const admin ={
        fontSize: 18,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column ',
        textDecoration: 'none',
        fontFamily: 'Rockwell'
    }

    describe('testing admin object', () => {
        test('if fontFamily is Rockwell', () => {
            expect(admin.fontFamily).toBe('Rockwell')
        })

        test('to see if display is flex', () => {
            expect(admin.display).toBe('flex')
        })
    })
})


