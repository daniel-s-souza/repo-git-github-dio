const numbers = [1,2,3,4,5,6,7,8,9,10];
const ParNumbers = [];
const ImparNumbers = [];

for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] % 2 === 0) {
    ParNumbers.push(numbers[index]);
    console.log(ParNumbers);
  } else {
    ImparNumbers.push(numbers[index]);
    console.log(ImparNumbers);
  }
}