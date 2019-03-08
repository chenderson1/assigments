const readline = require("readline-sync");
const util = require("util");
const colors = require("colors");
const setTimeoutPromise = util.promisify(setTimeout);

const choices = ["Put hand in hole", "Find the key", "Open the door"];
let index;

function start() {
  console.clear();
  console.log("Your are locked in a room dark room...".red);

  setTimeoutPromise(3000)
    .then(() => {
      console.clear();
      console.log("To survive you must make a choice...".red);
    })
    .then(() => {
      setTimeoutPromise(3000).then(() => {
        makeChoice();
      });
    });
}

function makeChoice() {
  console.clear();
  index = readline.keyInSelect(choices, "What do you choose?".red);
  if (index === 0)
    console.log("sorry you died from spontaneous combustion".red);
  else if (index === 1)
    console.log(
      "You find the key then slowly open the door. There you find everything you ever wished for."
        .red
    );
  else if (index === 2) {
    console.clear();
    console.log("You hear a noise behind yo!@FWHAT$#&IS!@*$#@....".red);
    setTimeoutPromise(3000).then(() => {
      start();
    });
  }
}

start();
