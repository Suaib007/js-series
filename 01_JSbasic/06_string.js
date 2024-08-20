const name = "blacksmith";
const repoCount = 50;

console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Mr.Blacksmith");
console.log(gameName[0]);
console.log(gameName[1]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.charAt(3));
console.log(gameName.indexOf("B"));
console.log(gameName.toUpperCase());

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(0, -4);
console.log(anotherString);
