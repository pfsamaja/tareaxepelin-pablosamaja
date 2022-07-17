 const balanceParenthesis = require('./balancedParenthesis');

test('empty string', () => {   // si no hay parentesis de ningun tipo, no se considera un string balanceado porque no hay nada que analizar
    expect(balanceParenthesis('')).toBe(false);
}
);
test('string with one parenthesis', () => {
    expect(balanceParenthesis('(')).toBe(false);
}
);
test('string with one pair', () => {
    expect(balanceParenthesis('()')).toBe(true);
}
);
test('string with two pairs', () => {
    expect(balanceParenthesis('()()')).toBe(true);
}
);
test('string with one pair and one open parenthesis', () => {
    expect(balanceParenthesis('()(')).toBe(false);
}
);
test('string with closing parenthesis first ', () => {
    expect(balanceParenthesis('())(')).toBe(false);
}
);
test('string with more than one type of parenthesis', () => {
    expect(balanceParenthesis('{}[]()')).toBe(true);
}
);
test('string with more than one type of parenthesis and one open parenthesis', () => {
    expect(balanceParenthesis('{}[]()(')).toBe(false);
}
);