// no duplicates
var input = "bookkeeper larry";

const newStr = input
  .split("")
  .filter((char, index, arr) => {
    return index === arr.indexOf(char);
  })
  .join("");

console.log(newStr);
// random delete

// create random index
const randomNum = Math.floor(Math.random() * input.length);

function randomRemove(str) {
  //select char at random index and replace with '' to remove
  return str.replace(str[randomNum], "");
}
console.log(randomRemove(input));

//scramble original str

function scramble(str) {
  const strArr = str.split("");
  return strArr.sort((a, b) => 0.5 - Math.random()).join("");
}

console.log(scramble(input));
