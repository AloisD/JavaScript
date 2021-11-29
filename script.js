"use strict";

const bills = [
  125,
  555,
  44
];

let tips = [];
let totals = [];

const calcTip = (bill) => bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;

for (let i = 0; i < bills.length; i ++) {
  tips[i] = calcTip(bills[i]);
  totals[i] = tips[i] + bills[i];
}

console.log(totals);