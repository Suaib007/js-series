const myNumbers = [1, 2, 3, 4];

// const myTotal = myNumbers.reduce(function (acc, currval) {
//   console.log(`acc: ${acc} and currval: ${currval}`);

//   return acc + currval;
// }, 0);

const myTotal = myNumbers.reduce((acc, currval) => acc + currval, 0);

console.log(myTotal);

const shoppongCart = [
  {
    itemName: "js course",
    price: 299,
  },
  {
    itemName: "py course",
    price: 299,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "dsa course",
    price: 12999,
  },
];

const priceToPay = shoppongCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay);
