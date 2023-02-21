"use strict";
/*let js = "amazing";
if (js === "amazing") {
    console.log("success");
}
48 + 23 - 10;
console.log(2 ** 3);
let PI = 31.245;
console.log(PI);
console.log(typeof 49, js);
withoutVariable = "sami";
console.log(withoutVariable);
console.log(typeof withoutVariable);
let dol_round_1 = 96, dol_round_2 = 108, dol_round_3 = 89;
let kholas_round_1 = 88, kholas_round_2 = 91, kholas_round_3 = 110;
let dol_average = (dol_round_1 + dol_round_2 + dol_round_3) / 3;
let kholas_average = (kholas_round_1 + kholas_round_2 + kholas_round_3) / 3;
if (dol_average === kholas_average && (dol_average && kholas_average >= 100)) {
    console.log("match is draw");
} else if (dol_average > kholas_average && (dol_average && kholas_average >= 100)) {
    console.log("dolphins wins the match");
} else if (kholas_average > dol_average && (dol_average && kholas_average >= 100)) {
    console.log("kholas wins the match");
} else {
    console.log("no one wins the trophy");
} 
let tip, tip_percentage, bill = 555;
(bill >= 50 && bill <= 300) ? tip_percentage = 15 : tip_percentage = 20;

if (bill >= 50 && bill <= 300) {
    tip_percentage = 15;
} else {
    tip_percentage = 20;
}
tip = (tip_percentage / 100) * bill;
//  x = (10 / 100) * tip_percentage;
let total_bill = tip + bill;
console.log("the bill was" + bill + ", the tip was" + tip + ", and the total value" + total_bill);
*/
/*function rough() {
    console.log("surya");
    console.log("surya");
    console.log("surya");
    console.log("sur");
}
rough();

const random = function (a, b) {

    return a * b;
};
console.log(random(4, 2));*/
/*let tip = [], tip_percentage;
let testData = [125, 555, 44];
let total_bill = [];
for (let i = 0; i <= testData.length - 1; i++) {
    if (testData[i] >= 50 && testData[i] <= 300) {
        tip_percentage = 15;
    } else {
        tip_percentage = 20;
    }
    console.log(tip_percentage);
    tip[i] = (tip_percentage / 100) * testData[i];
    total_bill[i] = tip[i] + testData[i];
}
//  x = (10 / 100) * tip_percentage;
//console.log("the bill was" + bill + ", the tip was" + tip + ", and the total value" + total_bill);
console.log(total_bill);
console.log(tip);
console.log(testData);*/
/*
const mark = {
    firstName: "Mark",
    secondName: "Miller",
    height: 1.69,
    weight: 78,
    calcBMI: function () {
        this.bmi = this.weight / this.height * 2 ^ 2;
        return this.bmi;
    }
};
const jhon = {
    firstName: "jhon",
    secondName: "smith",
    height: 1.95,
    weight: 92,
    calcBMI: function () {
        this.bmi = this.weight / this.height * 2 ^ 2;
        return this.bmi;
    }
};
if (jhon.bmi > mark.bmi) {
    console.log("jhons BMI  " + jhon.calcBMI() + " greater than marks  " + mark.calcBMI())
} else {
    console.log("marks BMI  " + "" + mark.calcBMI() + " greater than jhon's " + "" + jhon.calcBMI())
}
*/
// let tip = [], tip_percentage, bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52], total_bill = [];
// for (let i = 0; i <= bill.length - 1; i++) {
//     if (bill[i] >= 50 && bill[i] <= 300) {
//         tip_percentage = 15;
//     } else {
//         tip_percentage = 20;
//     }
//     tip[i] = (tip_percentage / 100) * bill[i];
//     total_bill[i] = tip[i] + bill[i];
// }
//  x = (10 / 100) * tip_percentage;
//console.log("the bill was" + bill + ", the tip was" + tip + ", and the total value" + total_bill);
// console.log(total_bill);
// console.log(tip);
// console.log(bill);
// let score = 20;
// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let highScore = 0;

// document.querySelector(".check").addEventListener("click", function () {
//   const guess = Number(document.querySelector(".guess").value);
//   if (!guess) {
//     document.querySelector(".message").textContent = "give a valid number";
//   } else if (score < 2) {
//     document.querySelector(".message").textContent = "Game over";
//     document.querySelector("body").style.backgroundColor = "red";
//     score = 0;
//     document.querySelector(".score").textContent = score;
//   } else if (guess === secretNumber) {
//     document.querySelector(".message").textContent = "🎯 Correct Number";
//     document.querySelector("body").style.backgroundColor = "#50C878";
//     document.querySelector(".number").textContent = secretNumber;
//     if (score > highScore) {
//       document.querySelector(".highscore").textContent = score;
//     }
//   } else if (guess > secretNumber) {
//     document.querySelector(".message").textContent = "📉 Number is too high";
//     score--;
//     document.querySelector(".score").textContent = score;
//     document.querySelector(".guess").value = " ";
//   } else if (guess < secretNumber) {
//     document.querySelector(".message").textContent = "📈 Number is too small";
//     score--;
//     document.querySelector(".score").textContent = score;
//     document.querySelector(".guess").value = " ";
//   }
// });
// document.querySelector(".again").addEventListener("click", function () {
//   score = 20;
//   document.querySelector(".score").textContent = score;
//   document.querySelector(".guess").value = " ";
//   document.querySelector(".message").textContent = "start guessing...";
//   document.querySelector("body").style.backgroundColor = "#222";
// });
