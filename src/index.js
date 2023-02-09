import "./styles.css";

const mainEl = document.getElementById("main-el");
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("convert-btn");

let units = [
  { title: "Length", a: "meters", b: "feet", conversionRate: 3.281 },
  { title: "Volume", a: "liters", b: "gallons", conversionRate: 0.624 },
  { title: "Mass", a: "kilograms", b: "pounds", conversionRate: 2.204 }
];

inputBtn.addEventListener("click", convertInput, false);

convertInput(20, 3.281);
renderConversion(20, units[0]);

function convertInput() {
  renderRows(inputEl.value, units);
}

function renderRows(input, arr) {
  let htmlStr = "";
  for (let i = 0; i < arr.length; i++) {
    htmlStr += `<div class="row"><h2>${renderTitle(units[i])}</h2>
    ${renderConversion(input, units[i])}</div>`;
  }
  mainEl.innerHTML = htmlStr;
}

function renderTitle(unit) {
  return `${unit.title} (${capitalize(unit.a)}/${capitalize(unit.b)})`;
}

function renderConversion(input, unit) {
  return `${input} ${unit.a} = ${multiply(input, unit.conversionRate)} ${
    unit.b
  } | ${input} ${unit.b} = ${divide(input, unit.conversionRate)} ${unit.a}`;
}

function multiply(a, b) {
  return (a * b).toFixed(3);
}
function divide(a, b) {
  return (a / b).toFixed(3);
}

function capitalize(s) {
  return s && s[0].toUpperCase() + s.slice(1);
}
