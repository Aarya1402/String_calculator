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

test('returns sum of 10 comma-separated numbers', () => {
    expect(add("1,2,3,4,5,6,7,8,9,10")).toBe(55);
});
test('returns sum of 100 comma-separated numbers', () => {
    const input = Array.from({ length: 100 }, (_, i) => i + 1).join(',');
    const expected = (100 * (100 + 1)) / 2; // 5050
    expect(add(input)).toBe(expected);
});
test('returns sum of 1000 comma-separated numbers', () => {
    const input = Array.from({ length: 1000 }, (_, i) => i + 1).join(',');
    const expected = (1000 * (1000 + 1)) / 2; // 500500
    expect(add(input)).toBe(expected);
});

test('handles newline as delimiter', () => {
    expect(add("1\n2,3")).toBe(6);
});


test('support custom single-character delimiter', () => {
    expect(add("//;\n1;2")).toBe(3);
});
