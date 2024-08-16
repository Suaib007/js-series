// # Primitive DataTypes
// 7 Types : String, Number, Boolean, Null,Undefined, Symbol, BigInt

// Reference (Non Primitive DataTypes)

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outSideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

// Array, Objects, Functions

const heros = ["Thor Thunder of God", "Wolverine", "Superman"];

let myObj = {
  name: "Mr.Black",
  age: 25,
};

const myFunction = function () {
  console.log("Hello World!");
};

console.log(typeof score);
console.log(typeof outSideTemp);
console.log(typeof myFunction);

// ==================================
// STACK (PRIMITIVE) => kise variable ka copy milta h  pr
// HEAP (NON-PRIMITIVE) => or esmey original value milta h referance milta h

let myVariable = "variable Name";
let anotherVariable = myVariable;
anotherVariable = "Chaiaurcode";
console.log(anotherVariable);

console.log(myVariable);

let userOne = {
  email: "shoaibiifa4432@gmail.com",
  upi: "user@ybl",
};

let userTwo = userOne;

userTwo.email = "blacksmith@google.com";

console.log(userOne.email);
console.log(userTwo.email);
