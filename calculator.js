const prompt = require("prompt-sync")(); // Please don't touch me :)

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.
//const name = prompt("What's your name? ");
//console.log(`Hi, I'm ${name}.`);
const num1 = prompt("Please enter the first number")
const num2 = prompt("Please enter the second number")
let num11 = parseInt(num1)
let num22 = parseInt(num2)
const operation = prompt("Please choose the operation (+, -, /, *)")
if (num11 / 1 !== num11 || num22 / 1 !== num22) console.log("invalid numbers")
if (operation === `+`) console.log(num11 + num22);
if (operation ===  `*`) console.log(num11 * num22);
if (operation === `/`) console.log(num11 / num22);
if (operation === `-`) console.log(num11 - num22);
