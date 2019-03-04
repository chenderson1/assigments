//===================================================   prelims
//1.
for (let i = 0; i <= 9; i++) {
  console.log(i);
}

//2.
for (let i = 9; i >= 0; i--) {
  console.log(i);
}
//3.
var fruit = ["banana", "orange", "apple", "kiwi"];

for (let i = 0; i < fruit.length; i++) {
  console.log(fruit[i]);
}

// ======================================================   bronze

//1.
{
  let arr = [];
  for (let i = 0; i <= 9; i++) {
    arr.push(i);
  }

  console.log(arr);
}
//2.

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) console.log(i);
}
//3.
var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
for (let i = 0; i <= fruit.length; i++) {
  if (i % 2 !== 0) console.log(fruit[i]);
}
//======================================================    silver
var peopleArray = [
  {
    name: "Harrison Ford",
    occupation: "Actor"
  },
  {
    name: "Justin Bieber",
    occupation: "Singer"
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician"
  },
  {
    name: "Oprah",
    occupation: "Entertainer"
  }
];

//1.

for (let person of peopleArray) {
  console.log(person.name);
}

//2.
{
  let arr = [];
  let occupationArr = [];
  for (let person of peopleArray) {
    arr.push(person.name);
    occupationArr.push(person.occupation);
  }
  console.log(arr, occupationArr);
}

//3.

{
  let arr = [];
  let occupationArr = [];
  for (let person of peopleArray) {
    if (peopleArray.indexOf(person) % 2 === 0) arr.push(person.name);
    if (peopleArray.indexOf(person) % 2 !== 0)
      occupationArr.push(person.occupation);
  }
  console.log(arr, occupationArr);
}

//============================================================   Gold
