/// To get the QP and solve them individually
let inputs = document.querySelector(".js-GPA");
inputs.addEventListener("keydown", clicked);
let totalGPa = [];
function clicked(event) {
  if (event.key === "Enter") {
    totalGPa.push(inputs.value);
    console.log(totalGPa);
    inputVal();
    inputs.value = "";
  }
}
function inputVal() {
  let totalValue = 0; // Reset the value everytime u enter the function
  for (let i = 0; i < totalGPa.length; i++) {
    let stringValue = totalGPa[i];
    totalValue += eval(stringValue);
  }
  return totalValue;
}
//// To get the unit value and add the individual;y
let units = document.querySelector(".js-units");
units.addEventListener("keydown", unitClick);
let unitArray = [];
function unitClick(event) {
  if (event.key === "Enter") {
    unitArray.push(units.value);
    console.log(unitArray);
    getUnitValue();
    units.value = "";
  }
}
function getUnitValue() {
  let unit = 0; // Reset the value everytime u enter the function
  for (let a = 0; a < unitArray.length; a++) {
    let unitValue = unitArray[a];
    let unitValues = eval(unitValue);
    unit += unitValues;
  }
  return unit;
}
/// To calculate for both of them and get the CGPA
const CGPA_Button = document.querySelector(".js-calc-CGPA");
const errorMessage = document.querySelector(".js-error-message");
CGPA_Button.addEventListener("click", calc);
function calc() {
  let totalGPA = inputVal();
  let totalUnits = getUnitValue();
  let result = totalGPA / totalUnits;
  if (isNaN(result)) {
    errorMessage.innerHTML = "Complete the two Selections";
    errorMessage.classList.add("error-message");
  } else {
    result = (Math.round(result * 100) / 100).toFixed(2);
    document.querySelector(".js-display").innerHTML = result;
  }
}
/// To calculate and get the GPA
const GPA_Button = document.querySelector(".js-calc-GPA");
GPA_Button.addEventListener("click", GPA);
function GPA() {
  let gpa = inputs.value;
  let totalUnits = units.value;
  let result = eval(gpa) / eval(totalUnits);
  if (isNaN(result)) {
    errorMessage.innerHTML = "Complete the two Selections";
    errorMessage.classList.add("error-message");
  } else {
    result = (Math.round(result * 100) / 100).toFixed(2);
    document.querySelector(".js-display").innerHTML = result;
  }
}
