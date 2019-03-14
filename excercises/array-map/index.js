console.clear();

//1
function doubleNumbers(arr) {
  return arr.map(num => num * 2);
}

console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]
//2
function stringItUp(str) {
  return str.map(num => num.toLocaleString());
}

console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]
//3
function capitalizeNames(arr) {
  return arr.map(name => {
    let nameLower;
    nameLower = name.toLowerCase();
    return nameLower.charAt(0).toUpperCase() + nameLower.slice(1);
  });
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]
//4
function namesOnly(arr) {
  return arr.map(obj => obj.name);
}

console.log(
  namesOnly([
    {
      name: "Angelina Jolie",
      age: 80
    },
    {
      name: "Eric Jones",
      age: 2
    },
    {
      name: "Paris Hilton",
      age: 5
    },
    {
      name: "Kayne West",
      age: 16
    },
    {
      name: "Bob Ziroll",
      age: 100
    }
  ])
);
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
//5
function makeStrings(arr) {
  return arr.map(obj =>
    obj.age > 18
      ? `${obj.name} can go to the matrix`
      : `${obj.name} cant go to the matrix`
  );
}

console.log(
  makeStrings([
    {
      name: "Angelina Jolie",
      age: 80
    },
    {
      name: "Eric Jones",
      age: 2
    },
    {
      name: "Paris Hilton",
      age: 5
    },
    {
      name: "Kayne West",
      age: 16
    },
    {
      name: "Bob Ziroll",
      age: 100
    }
  ])
);
// ["Angelina Jolie can go to The Matrix",
// "Eric Jones is under age!!",
// "Paris Hilton is under age!!",
// "Kayne West is under age!!",
// "Bob Ziroll can go to The Matrix"]

//6
function readyToPutInTheDOM(arr) {
  return arr.map(obj => `<h1>${obj.name}</h1><h2>${obj.age}</h2>`);
}
console.log(
  readyToPutInTheDOM([
    {
      name: "Angelina Jolie",
      age: 80
    },
    {
      name: "Eric Jones",
      age: 2
    },
    {
      name: "Paris Hilton",
      age: 5
    },
    {
      name: "Kayne West",
      age: 16
    },
    {
      name: "Bob Ziroll",
      age: 100
    }
  ])
);
// ["<h1>Angelina Jolie</h1><h2>80</h2>",
// "<h1>Eric Jones</h1><h2>2</h2>",
// "<h1>Paris Hilton</h1><h2>5</h2>",
// "<h1>Kayne West</h1><h2>16</h2>",
// "<h1>Bob Ziroll</h1><h2>100</h2>"]
