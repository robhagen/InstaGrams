
// Decleration of global variables
let buttonCalculate = document.getElementById("buttonCalculate");
let answer = document.getElementById("answer");
let amountOfCups = document.getElementById("amountOfCups").value;
let ingredientType = document.getElementById("typeOfIngredient").value;
let ingredientIndex = document.getElementById("typeOfIngredient").selectedIndex;
let measurementUnit = "answer here";

// Fuction for clicking the Calculate!-button
buttonCalculate.onclick = function() {
  checkIngredientIndex();
  checkAmountOfCups();
  checkIngredientType();
  result = amountOfCups * ingredientType;
  answer.innerHTML = "Alright, in the metric system that would be" + " " + result + " " + measurementUnit;
};

// Function that check how many cups the user wants to convert and updates the current amount
function checkAmountOfCups() {
  amountOfCups = document.getElementById("amountOfCups").value;
};

// Function that check what type of ingredient the user wants to convert and updates the current type
function checkIngredientType() {
  ingredientType = document.getElementById("typeOfIngredient").value;
};

// Function that checks the index of the chosen ingredient and sets the measurement units accordingly
function checkIngredientIndex() {
  ingredientIndex = document.getElementById("typeOfIngredient").selectedIndex;
  if (ingredientIndex == 0 || ingredientIndex == 1) {
    measurementUnit = "mililiters";
  } else {
    measurementUnit = "grams";
  }
};
