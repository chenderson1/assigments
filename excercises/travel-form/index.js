//grab all inputs
const firstName = document.forms[0].elements.firstName;
const lastName = document.forms[0].elements.lastName;
const age = document.forms[0].elements.age;
const gender = document.forms[0].elements.gender;
const formlocation = document.forms[0].elements.location;
const diet = document.forms[0].elements.diet;
console.dir(document.forms[0].elements.firstName.value);
//grab button
const btn = document.querySelector("button");

//define user object
const formObject = {};

//submit button event listener
btn.addEventListener("click", travelSubmit);

//submit event
function travelSubmit(e) {
  //create user object
  formObject.firstName = firstName.value;
  formObject.lastName = lastName.value;
  formObject.age = age.value;
  formObject.gender = gender.value;
  formObject.location = formlocation.value;
  formObject.diet = dietaryRestrictions();
  //define alert message
  message = `
  First name: ${formObject.firstName}
  Last name: ${formObject.lastName}
  Age: ${formObject.age}
  Gender: ${formObject.gender}
  Location: ${formObject.location}
  Dietary: ${formObject.diet}
  `;
  e.preventDefault();

  //clear form
  document.forms[0].reset();

  //alert message
  alert(message);
}
function dietaryRestrictions() {
  let dietValue = "";
  diet.forEach(option => {
    if (option.checked) {
      if (dietValue) {
        dietValue += `, ${option.value}`;
      } else {
        dietValue += option.value;
      }
    }
  });
  return dietValue;
}
