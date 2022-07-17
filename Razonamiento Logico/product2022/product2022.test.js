const findAndMultiply = require('./product2022');

test('array with numbers that sum 2022', () => {
    expect(findAndMultiply([11, 2011, 1022, 4, 5, 6, 7, 8, 9, 10])).toBe(22121);
  });
test('array with numbers that dont sum 2022', () => {
    expect(findAndMultiply([10, 2011, 1022, 4, 5, 6, 7, 8, 9, 10])).toBe(0);
    }
    );

test('empty array', () => {
    expect(findAndMultiply([])).toBe(0);
    }
    );

test('array with one number', () => {
        expect(findAndMultiply([10])).toBe(0);
            }
            );

test('array with one number that sums 2022', () => {
    expect(findAndMultiply([1011])).toBe(0);
        }
        );
test('array with two numbers', () => {
     expect(findAndMultiply([10, 2011])).toBe(0);
 }
);

test('array with negative numbers', () => {
    expect(findAndMultiply([-10, 2032, 1022, 4, 5, 6, 7, 8, 9, 10])).toBe(-20320);
}
);
