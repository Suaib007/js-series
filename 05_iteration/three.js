//  for of

// const arr = [1, 2, 3, 4, 5];

// for (const num of arr) {
//   console.log(num);
// }

// const greeting = "Hello World!";

// for (const greet of greeting) {
//   console.log(`Each char is ${greet}`);
// }

// Maps

const map = new Map();
map.set("IN", "INDIA");
map.set("USA", "United State of America");
map.set("Fr", "France");
// map.set("IN", "INDIA");

console.log(map);

for (const [key, value] of map) {
  // map is iterable
  console.log(key, ":-", value);
}

const myObject = {
  // object iterable nahi hotey h
  game1: "NFS",
  game2: "GTA",
  game3: "FIFA",
};

// for (const [key, value] of myObject) {
//   console.log(key, ":-", value);
// }
