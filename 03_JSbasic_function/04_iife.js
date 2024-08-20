// Immediately Invoked Function Expressions (IIFE)

(function chai() {
  // named iife
  console.log(`DB CONNECTED`);
})();

// first()Second()
// first parenthesis()=>defination
//  Second parenthesis ()=>execution

((name) => {
  // without name iife
  console.log(`DB CONNECTED TWO ${name}`);
})("Blacksmith");
