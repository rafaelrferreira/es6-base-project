// operations.test.js
const operations = require('./operations')
test('Apply discount', () => {
    const result = operations.applyDiscount(10,5);
    expect(result).toEqual(5);
})