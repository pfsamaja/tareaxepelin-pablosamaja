
const findAndMultiply = (numbers) => {
    for (let i = 0; i < numbers.length; i++) {
       for (let j = 0; j < numbers.length; j++) {
           if (numbers[i] + numbers[j] === 2022 && i !== j) {
               return numbers[i] * numbers[j];
           }
       }
    }
    return 0;
}
module.exports = findAndMultiply;
