const readline = require("readline-sync");
const util = require("util");
const setTimeoutPromise = util.promisify(setTimeout);
const colors = require("colors");

const userObject = {};
const actions = ["walking", "attack", "walking", "walking"];
const walkingMessages = [
  `${userObject.name} continues down their current path of suspence`,
  `${userObject.name} thinks maybe this dark hallway leads to the way out!`,
  `I didnt think you were scared of the dark anyway, ${
    userObject.name
  } is a tough name!`
];

function start() {
  console.clear();
  setTimeoutPromise(3000)
    .then(() => {
      console.log(
        "                               The Game is starting                            "
          .zebra
      );
    })
    .then(() => {
      setTimeoutPromise(3000)
        .then(() => {
          console.clear();
          userObject.name = readline.question("What is your name ?".random);
        })
        .then(() => {
          setTimeoutPromise(3000)
            .then(() => {
              console.clear();
              console.log(
                `For some reason ${
                  userObject.name
                } you find yourself at the entrance to the forbidden forest of darkness`
                  .red
              );
            })
            .then(() => {
              setTimeoutPromise(5000).then(() => {
                console.clear();
                walking();
              });
            });
        });
    });
}

function walking() {
  console.log("walking part");
}

start();
