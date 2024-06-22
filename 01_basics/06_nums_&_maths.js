score = 400; //number

const balance = new Number(100.43); //100% a number
// console.log(balance);

// console.log(balance.toString()); //can convert to string
// console.log(balance.toFixed(2)); //fixed the precision till 2 after decimal

const num = 123.899;
// console.log(num.toPrecision(3)); //124

const hundreds = 1000000;
// console.log((hundreds.toLocaleString('en-In'))); //10,00,000

// +++++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++++++

// console.log(Math.abs(-7821)); //7821
// console.log(Math.round(4.32)); //4
// console.log(Math.ceil(4.32)); //5
// console.log(Math.floor(4.62)); //4
// console.log(Math.min(4, 5, 6, 8, 2, 5)); //2

// console.log(Math.random()); //always varies from 0 to 1
// console.log((Math.random()*10) + 1); //generate random value greater than 0 
// console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min)) //formula to set limit 