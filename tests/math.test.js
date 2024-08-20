const math = require('../math');
test('soma 2 + 3 igual a 5', () => { 
    expect(math.add(2, 3)).toBe(5); 

}); 
test('soma 5 + 5 igual a 10', () => { 
    expect(math.add(5, 5)).toBe(10);    
}); 