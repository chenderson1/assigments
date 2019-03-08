const readline = require("readline-sync");
const util = require("util");
const setTimeoutPromise = util.promisify(setTimeout);

const choices = ["Put hand in hole", "Find the key", "Open the door"];
let index;

function start() {
  console.log("Your are locked in a room dark room...");

  setTimeoutPromise(3000)
    .then(() => {
      console.log("You must make a choice...");
    })
    .then(() => {
      setTimeoutPromise(3000).then(() => {
        makeChoice();
      });
    });
}

function makeChoice() {
  index = readline.keyInSelect(choices, "What do you choose?");
  if (index === 0) console.log("sorry you died");
  else if (index === 1)
    console.log(
      "You find the key then slowly open the door. There you find everything you ever wished for."
    );
  else if (index === 2) {
    console.log("You hear a noise behind yo!@FWHAT$#&IS!@*$#@....");
    setTimeoutPromise(3000).then(() => {
      start();
    });
  }
}

start();
