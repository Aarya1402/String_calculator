const add = require('./stringCalculator');
test('Jest is working', () => {
    expect(1).toBe(1);

});

test('add function returns 0 for empty string', () => {
    expect(add("")).toBe(0);
});

test('returns the number if only one number is provided', () => {
    expect(add("4")).toBe(4);
});

test('returns sum of two comma-separated numbers', () => {
    expect(add("1,2")).toBe(3);
});

test('returns the number if input is a single two-digit number', () => {
    expect(add("42")).toBe(42);
});
test('returns sum of multiple numbers', () => {
    expect(add("1,2,3,4")).toBe(10);
});


