// if statement

// const isUserLoggedIn = true;

// if (2 == "2") {
//   console.log("executed");
// }

//  comparision operator

// < -> less than-<=
// > -> Greater than->=
// == -> equal to
// != -> not equal to
// === -> strict equal to
// !== -> strict not equal to

// const score = 200;

// if (score > 100) {
//   const power = "fly";
//   console.log(`user power: ${power}`);
// }

// const balance = 1000;

// if (balance > 500) console.log("test");

// if (balance < 500) {
//   console.log("less than 500");
// } else if (balance < 750) {
//   console.log("less than 750");
// } else if (balance < 900) {
//   console.log("less than 900");
// } else {
//   console.log("less than 1200");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2 === 2) {
  console.log("Allow to buy course");
}
if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("user logged in");
}
