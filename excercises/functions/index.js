// // Write a function that accepts two numbers as parameters, and returns the sum.
// function sum(num1, num2) {
//   return num1 + num2;
// }
// // Write a function that accepts three numbers as parameters, and returns the largest of those numbers.
// function threeNumbers(num1, num2, num3) {
//   let arr = [num1, num2, num3];
//   let biggest = 0;
//   for (let n of arr) {
//     if (n > biggest) biggest = n;
//   }
//   return biggest;
// }
// //Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd");
// function isEven(num1) {
//   return num1 % 2 === 0 ? "even" : "odd";
// }
// //Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself
// function str(str) {
//   return str.length <= 20
//     ? str + str
//     : str.slice(0, Math.floor(str.length / 2));
// }

// console.log(threeNumbers(2, 4, 100));
//bonus fibonancci
//1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
function fibonancci(num) {
  //create an array
  let arr = [];
  let acc = 1;
  for (let i = 0; i <= num; i++) {
    debugger;
    arr.push(acc + i);
    acc++;
  }
}
console.log(fibonancci(6));
