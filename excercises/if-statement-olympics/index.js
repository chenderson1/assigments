//==================================prelim
if (5 > 3) console.log("is greater than");

const cat = "cat";

if (cat.length === 3) {
  console.log("is the length");
} else if (cat === "dog") {
  console.log("not the same");
}
//=================================Bronze
var person = {
  name: "Bobby",
  age: 12
};
person.age >= 18
  ? console.log(`${person.name} is allowed to go to the movie`)
  : console.log(`${person.name} is NOT allowed to go to the movie`);

person.name.startsWith("B")
  ? console.log(`${person.name} is allowed to go to the movie`)
  : console.log(`${person.name} is NOT allowed to go to the movie`);

person.name.startsWith("B") && person.age >= 18
  ? console.log(`${person.name} is allowed to go to the movie`)
  : console.log(`${person.name} is NOT allowed to go to the movie`);
//===================================silver
if (1 === "1") {
  console.log("strict");
} else if (1 == "1") {
  console.log("loose");
} else {
  console.log("not equal at all");
}

if (1 <= 2 && 2 === 4) "yes";

//======================================Gold
if (typeof "dog" === "string") console.log(true);
if (typeof true === "boolean") console.log(true);
if (cat != undefined) console.log(true); //is cat defined?
if ("s" > 12) console.log(true);

const num = 10;

num % 2 === 0 ? console.log("num is even") : console.log("num is odd");
