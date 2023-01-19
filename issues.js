// Kabisa
// function forYear(num) {
//   if ((num % 4 === 0 && num % 100 !== 0) || num % 400 == 0) {
//     return `${num}-kabisa yili`;
//   } else {
//     return `${num}-kabisa yili emas`;
//   }
// }
// console.log(forYear(2000));

// 4-masala
// let array = [1, -2, 3, 4, -5, 6, -7, -8, 9, -10];
// let newArray = [];
// function calculate(arr) {
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       newArray.push(arr[i]);
//     }
//     console.log(newArray);
//   }
// }
// calculate(array);
let num1 = 123454321;
let num2 = 345645;
let num3 = 987789;
let num4 = 555555;
let num5 = 852258;
let num6 = 15951;

function palindromNum(number) {
  let newArray = [];
  newArray = String(number).split("").reverse();
  let b = Number(newArray.join(""));
  console.log(number);
  if (number == b) {
    return "Palindrom son";
  } else {
    return "Palindrom son emas";
  }
}
console.log("bu", palindromNum(num1));
