// const userEmail = ["Blacksmith@gmail.com"];
const userEmail = [];

if (userEmail) {
  console.log(`Email is valid: ${userEmail}`);
} else {
  console.log("Email is invalid");
}

//  Falsy Values-----Truthy values
// ---false             ---"0"
// ---0                ---"false"
// ---(-0)              ---" "
// ---BigInt            ---[]
// ---0n                ---{}
// ---""                ---function(){}
// ---null              ---
// ---undefined
// ---NaN

// if (userEmail.length === 0) {
//   console.log("Array is empty");
// }

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

//  Nullish Coalescing Operator (??) : null undefined

// let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 10;
// val1 = null ?? 10 ?? 15;

// console.log(val1);

// Ternary Operator

// condition ? true : false;

// const iceTeaPrice = 100;
// iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
