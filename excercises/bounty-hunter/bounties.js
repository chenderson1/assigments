const uuidv4 = require("uuid/v4");

let bounties = [
  {
    firstName: "Lorraine",
    lastName: "Lester",
    isLiving: true,
    bounty: 50,
    type: "jedi",
    _id: uuidv4()
  },
  {
    firstName: "Mary",
    lastName: "Castillo",
    isLiving: true,
    type: "jedi",
    bounty: 3000000,
    _id: uuidv4()
  },
  {
    firstName: "Myrtle",
    lastName: " Taylor",
    type: "sith",
    isLiving: true,
    bounty: 9000,
    _id: uuidv4()
  }
];
module.exports = bounties;
