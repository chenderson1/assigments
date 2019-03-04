var str = "abcd efg";
//1.Make a function that will return any given string into all caps followed by the same string all lowercase.
function capitalization(str) {
  return `${str.toUpperCase()} ${str.toLowerCase()}`;
}

console.log(capitalization(str));
//2.Make a function that returns a number half the length, and rounded down.
function halfLength(str) {
  return Math.floor(str.length / 2);
}
console.log(halfLength(str));

//3.Make a function that uses slice() and the other functions you've written to return the first half of the string
function returnFirstHalf(str) {
  return str.slice(0, str.length / 2 + 1);
}

console.log(returnFirstHalf(str));
//4.Make a function that takes a string and returns that string where the first half is capitalized, and the second half is lower cased. (If the string length is odd, capitalize the shorter of the first half.)
function capilizeAndLowercase(str) {
  let upper = str.slice(0, str.length / 2 + 1).toUpperCase();
  let lower = str.slice(0, -str.length / 2 + 1).toLowerCase();

  return str.length % 2 !== 0 ? lower + upper : upper + lower;
}

console.log(capilizeAndLowercase(str));
//bonus

function capitalize(str) {
  //make string array
  let strArr = str.split("");
  //loop through string with map
  newStr = strArr
    .map((char, index, arr) => {
      //if the element @ the index before the current element is a space,  transform it or dont
      return str.charAt(index - 1) === " " ? char.toUpperCase() : char;
    })
    //join array
    .join("");
  //return new string
  return newStr;
}
console.log(capitalize(str));
