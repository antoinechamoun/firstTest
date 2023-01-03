const encrypt = require('./caesarCipher')

test('one character change', ()=>{
    expect(encrypt('a',1)).toBe('b')
})

test('string encryption', ()=> {
    expect(encrypt('abc',1)).toBe('bcd')
})

test('wrapping z to a', ()=>{
    expect(encrypt('xyz',1)).toBe('yza')
})

test('punctuation', ()=> {
    expect(encrypt('abc.,',1)).toBe('bcd.,')
})

test('Same case',()=>{
    expect(encrypt('ABC',1)).toBe('BCD')
})

test('All properties', () => {
    expect(encrypt('AbZx,.',2)).toBe('CdBz,.')
})

test('All properties', () => {
    expect(encrypt('defend the east wall of the castle',1)).toBe('efgfoe uif fbtu xbmm pg uif dbtumf')
})