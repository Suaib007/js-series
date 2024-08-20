// Singleton
// object.create

//  object literal

const mySym = Symbol("key1");

const JsUser = {
  name: "John",
  "full name": "Mr.Blacksmith",
  [mySym]: "myKey1",
  age: 30,
  location: "Delhi",
  email: "shoaibiifa4432@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Friday"],
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser.mySym);

JsUser.email = "chatgpt@gmail.com";
// Object.freeze(JsUser);
JsUser.email = "hello@gmail.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello js user");
};

JsUser.greetingTwo = function () {
  console.log(`Hello js user, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
