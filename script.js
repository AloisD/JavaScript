"use strict";

const bills = [
  22,
  295,
  176,
  440,
  37,
  105,
  10,
  1100,
  86,
  52
];

let tips = [];
let totals = [];

const calcTip = (bill) => bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;

for (let i = 0; i < bills.length; i ++) {
  tips[i] = calcTip(bills[i]);
  totals[i] = tips[i] + bills[i];
}

const calcAverage = (inputArray) => inputArray.reduce((acc, curr) => acc + curr) / inputArray.length;

console.log(calcAverage(totals));