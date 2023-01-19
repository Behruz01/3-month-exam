// Kabisa year
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

// Palindrom
// function palindromNum(number) {
//   let newArray = [];
//   newArray = String(number).split("").reverse();
//   let b = Number(newArray.join(""));
//   if (number == b) {
//     return `${number} palindrom son`;
//   } else {
//     return `${number} Palindrom son emas`;
//   }
// }
// console.log(palindromNum(121));

// first issues
function maxLetter(word) {
  const array = word.split("");
  console.log(array);
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (max == array[i]) {
      max = array[i];
    }
  }
  return max;
}

word = "ssalsmu";
console.log(maxLetter(word));
