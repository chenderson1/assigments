const readline = require("readline-sync");
const util = require("util");
const setTimeoutPromise = util.promisify(setTimeout);
const colors = require("colors");

//enemy Objects
const enemies = [
  {
    health: 30,
    weapon: "bat"
  },
  {
    health: 50,
    weapon: "Knife"
  },
  {
    health: 80,
    weapon: "Gun"
  }
];

let randomEnemy;
// action array
const actions = ["walking", "fight", "walking", "walking"];

const userObject = {};
userObject.health = 100;
userObject.inventory = ["whistle"];

setTimeoutPromise(3000, () => {})
  .then(() => {
    console.clear();
    console.log(
      "                                                 Game Is Starting                                                "
        .zebra
    );
  })
  .then(() => {
    setTimeoutPromise(3000, () => {})
      .then(() => {
        console.clear();
        console.log(
          "                         You will probably DIE, but good luck anyway!                              "
            .red
        );
      })
      .then(() => {
        setTimeoutPromise(5000, () => {}).then(() => {
          console.clear();

          while (userObject.health > 0) {
            walk();
          }

          function walk() {
            let randomAction =
              actions[Math.floor(Math.random() * actions.length)];

            console.log("check inventory or walk to continue");

            let choices = ["print", "walk", "find someone to fight", "leave"];
            let index = readline.keyInSelect(choices, "How will you proceed ?");

            if (index === 0) {
              console.log(`
    health: ${userObject.health}
    Items:${userObject.inventory[0]}
    `);
            } else if (index === 1) {
              //ask user to push "w" to walk
              let walk = readline.keyIn("Walk forward ?", "w");
              if (walk) {
                if (randomAction === "fight") {
                  fight();
                } else {
                  //safe
                  console.log("walk is safe this time");
                }
              }
            } else if (index === 2) {
              fight();
            } else if (index === 3) {
              process.exit(0);
            }
          }
          //===================RUN
          function run() {
            let chance = Math.floor(Math.random() * 2);
            if (chance === 1) {
              //success
              console.log("You succefully ran away");
            } else {
              //tell user they were not able to run
              console.log("ran into a enemy");
              enemyAttack();
            }
          }
          //==================Fight
          function fight() {
            console.log("you find yourself in front of an enemy");
            //ask user to either fight or run
            let choices = ["run", "fight"];
            let index = readline.keyInSelect(choices, "How will you proceed ?");
            enemyCreation();
            if (index === 0) {
              run();
            } else {
              attackEnemy();
            }
            while (randomEnemy.health > 0) {
              attackEnemy();
              enemyAttack();
            }
            if (userObject.health <= 0) die();
            else if (randomEnemy.health <= 0) enemyDie();
          }
          //===============Attack the enemy
          function attackEnemy() {
            console.log("you take the fight to the enemy");
            let attack = Math.floor(Math.random() * 100);
            //reduce enemy health by ATTACK
            randomEnemy.health -= attack;
            console.log(`you hit enemy for -${attack} health`);
            console.log(` enemy health:${randomEnemy.health}`);
            1;
          }
          //==================Enemy attacks
          function enemyAttack() {
            console.log("the enemy brings the fight to you");
            let damage = Math.floor(Math.random() * 100);
            //reduce user health by DAMAGE
            userObject.health -= damage;
            console.log(`Enemy hit you for -${damage} health`);
            console.log(` Your health: ${userObject.health}`);
          }

          function die() {
            console.log("You died in cool way");
          }
          function enemyDie() {
            userObject.health += 20;
            userObject.inventory.push("Sword of Truth");
            console.log("you slayed that enemy!");
          }
          //====================Create Enemey
          function enemyCreation() {
            randomEnemy = enemies[Math.floor(Math.random() * enemies.length)];
          }
        });
      });
  });
