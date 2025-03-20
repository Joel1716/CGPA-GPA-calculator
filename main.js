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
   totalGPa.forEach((value) => {
    let eachGPA = value.split(",");
    const sumOfEachGPA = eachGPA.reduce(
      (total, num) => total + parseInt(num),
      0
    );
    totalValue += sumOfEachGPA;
  });
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
  unitArray.forEach((value) => {
    let eachUnit = value.split(",");
    const sumOfEachUnit = eachUnit.reduce(
      (total, num) => total + parseInt(num),
      0
    );
    unit += sumOfEachUnit;
  });
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
  let eachGPA = inputs.value.split(",");
  const gpaSum = eachGPA.reduce((total, num) => {
    return total + Number(num);
  }, 0);
  let eachUnit = units.value.split(",");
  const unitSum = eachUnit.reduce((total, num) => {
    return total + Number(num);
  }, 0);
  let result = eval(gpaSum) / eval(unitSum);
  if (isNaN(result)) {
    errorMessage.innerHTML = "Complete the two Selections";
    errorMessage.classList.add("error-message");
  } else {
    result = (Math.round(result * 100) / 100).toFixed(2);
    units.value = "";
    inputs.value = "";
    document.querySelector(".js-display").innerHTML = result;
    errorMessage.classList.remove("error-message");
  }
}
