const express = require("express");
const morgan = require("morgan");
const uuidv4 = require("uuid/v4");

const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

//fake data
let wizards = [
  {
    name: "Harry Potter",
    age: 16,
    isGood: true,
    favClasses: ["Potions", "Defense Against Dark Arts", "Quidditch"],
    hasOwl: true,
    house: "Stair-closet/Gryffindor",
    _id: uuidv4()
  },
  {
    name: "Ron Weasley",
    age: 16,
    isGood: true,
    favClasses: ["Potions", "Defense Against Dark Arts"],
    hasOwl: false,
    house: "Mystical house/Gryffindor",
    _id: uuidv4()
  },
  {
    name: "Belatrix Lestrange",
    age: 40,
    isGood: false,
    favClasses: ["forbidden spells", "Dark magic", "killing good guys"],
    hasOwl: false,
    house: "none/voldemort",
    _id: uuidv4()
  }
];
// //prettier-ignore
// const merlin =   {
//     "name": "Belatrix Lestrange",
//     "age": 40,
//     "isGood": false,
//     "favClasses": [
//       "forbidden spells",
//       "Dark magic",
//       "killing good guys"
//     ],
//     "hasOwl": false,
//     "house": "none/voldemort",
//     "_id": "ecae8fc5-3f37-4b5e-bd9b-58d98412e59a"
//   };

//routes
app.get("/wizards", (req, res) => {
  res.send(wizards);
});
app.get("/wizards/:_id", (req, res) => {
  const foundWizard = wizards.find(wizard => wizard._id === +req.params._id);
  res.send(foundWizard);
});

app.post("/wizards", (req, res) => {
  const neWizard = req.body;
  neWizard._id = uuidv4();
  wizards.push(neWizard);
  res.send(wizards);
});

app.put("/wizards/:_id", (req, res) => {
  const wizardToUpdate = wizards.find(wizard => wizard._id === +req.params._id);
  const updatedWizard = Object.assign(wizardToUpdate, req.body);
  const updatedD = wizards.map(wizard =>
    wizard._id === updatedWizard._id ? updatedWizard : wizard
  );
  wizards = updatedDB;
  res.send(wizards);
});

app.delete("/wizards/:_id", (req, res) => {
  const wizardToRemove = wizards.find(wizard => wizard._id === +req.params._id);
  const updatedDb = wizards.filter(
    wizard => wizard._id !== +wizardToRemove._id
  );
  wizards = updatedDb;
  res.send(wizards);
});

app.listen(port, () => {
  console.log(`The magic happens on port: ${port}`);
});
