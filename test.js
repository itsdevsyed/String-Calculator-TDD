const add = require('./stringCalculator');

test('returns 0 for an empty string', () => {
    expect(add("")).toBe(0);
});

test(' if only one number ', () => {
    expect(add("1")).toBe(1);
});

test(' sum of two comma-separated numbers', () => {
    expect(add("1,5")).toBe(6);
});

test('handles newlines between numbers', () => {
    expect(add("1\n2,3")).toBe(6);
});

test('supports custom delimiters', () => {
    expect(add("//;\n1;2")).toBe(3);
});

test('throws an error for negative numbers', () => {
    expect(() => add("1,-2,3")).toThrow('negative numbers not allowed: -2');
});
