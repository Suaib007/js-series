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

function loginUserMessage(username = "sam") {
  if (username === undefined) {
    console.log("please enter a username");
    return;
  }
  return `${username} just logged in `;
}

// console.log(loginUserMessage("Shoaib"));
// console.log(loginUserMessage("Mr.Blacksmith"));

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calculateCartPrice(200, 300, 100));

const user = {
  username: "Shoaib",
  price: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price} `
  );
}
// handleObject(user);
handleObject({
  username: "sam",
  price: 2000,
});

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 4000, 100, 600]));
