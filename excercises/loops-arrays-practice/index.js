//======================================     1.  ===========================

const officeItems = [
  "stapler",
  "monitor",
  "computer",
  "desk",
  "lamp",
  "computer",
  "lamp",
  "stapler",
  "computer",
  "computer"
];

let counter = 0;

for (let item of officeItems) {
  if (item === "computer") {
    counter++;
  }
}
console.log(counter);
//======================================     2. PLUS BONUS ===========================
var peopleWhoWantToSeeMadMaxFuryRoad = [
  {
    name: "Mike",
    age: 12,
    gender: "male"
  },
  {
    name: "Madeline",
    age: 80,
    gender: "female"
  },
  {
    name: "Cheryl",
    age: 22,
    gender: "female"
  },
  {
    name: "Sam",
    age: 30,
    gender: "male"
  },
  {
    name: "Suzy",
    age: 4,
    gender: "female"
  }
];

peopleWhoWantToSeeMadMaxFuryRoad.map(person => {
  //define variable
  let genderHelper = person.gender === "female" ? "her" : "him";
  //define log statement based on age
  person.age > 18
    ? console.log(`${person.name} is old enough let ${genderHelper} in`)
    : console.log(
        `${person.name} is not old enough dont let ${genderHelper} in`
      );
});

//========================================    Optional Bonus ==============================

let light = false;
const arr = [2, 5, 435, 4, 3];

//find sum of the array
const sum = arr.reduce((sum, currNum) => {
  return sum + currNum;
});

//toggle  light a # of times based on  sum of arr
let i = 0;

while (i < sum) {
  light = !light;
  i++;
}

//log final state of light var
light ? console.log("light on") : console.log("light off");
