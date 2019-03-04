const shopper = {
  name: "Miles",
  budget: 26,
  isBroke: false,
  canAfford: total => this.budget > total,
  groceryCart: ["Veggies", "Tooth Paste", "Peanut Butter", "Jelly"]
};

console.log(shopper.canAfford(32));
