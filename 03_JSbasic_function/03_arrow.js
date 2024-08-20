const user = {
  username: "Blacksmith",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "Shoaib";
// user.welcomeMessage();

// console.log(this);

// function chai() {
//     let username = "Mainu";
//   console.log(this.username);
// }

// chai();

//  Arrow Function
// const chai = () => {
//   let username = "Mainu";
//   console.log(this);
// };

// chai();

// const addTwo = (num1, num2) => num1 + num2;
// const addTwo = (num1, num2) => num1 + num2;
const addTwo = (num1, num2) => ({ username: "Shoaib" });

console.log(addTwo(3, 4));

// const myArray = [2, 5, 3, 7, 8];

// myArray.forEach();
