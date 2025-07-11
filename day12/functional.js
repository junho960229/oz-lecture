// map
let numbers = [1, 2, 3];

// numbers에 있는 모든 숫자 값을 2배로 하고 싶다.
// let newNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//     const num = numbers[i];
//     newNumbers.push(num * 2);
//     console.log(newNumbers);
// }
// numbers = newNumbers;

function double(num) {
    return num * 2;
}
let newNumbers = [];
 for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    newNumbers.push(double(num));
    console.log(newNumbers);
}
numbers = newNumbers;
console.log(numbers);

//filter
let numbersA = [1, 2, 3, 4, 5];
//짝수인 값만 빼고 싶어요
// let nemNumbersA = [];
// for (const num of numbersA) {
//     if(num % 2 === 0) newNumbersA.push(num);
// }
// console.log(newNumbersA);

// const even = function (num) {
//     if (num % 2 === 0) return num;
// }
// let numNumbersA = [];
// for (const num of numbersA) {
//     if 
// }

// numbers.filter(num) => {
//     return num % 2 === 0
// }

// reduce
let numberB = [1, 2, 3, 4];
// 배열에 있는 값의 총합
let sum = 0;
numbersB.forEach((num) => {
    sum += num;
});
console.log(sum);

const sum = numberB.reduce((acc, num) => {

}, 0);

