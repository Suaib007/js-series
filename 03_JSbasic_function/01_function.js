function sayMyName() {
  console.log("H");
  console.log("E");
  console.log("L");
  console.log("L");
  console.log("O");
}

// sayMyName();

// function addTwoNumbers(num1, num2) {
//   console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2) {
  //   let result = num1 + num2;
  //   return result;

  return num1 + num2;
}

const result = addTwoNumbers(3, 5);
// console.log("Result: ", result);

function loginUserMessage(username) {
  if (username === undefined) {
    console.log("please enter a username");
    return;
  }
  return `${username} just logged in `;
}

// console.log(loginUserMessage("Shoaib"));
console.log(loginUserMessage());
