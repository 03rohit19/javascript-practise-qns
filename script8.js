// currying in javascript
//example 1

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(sum(3)(6)(9));

//example 2

function evaluate(operation) {
  return function (a) {
    return function (b) {
      if (operation === "sum") return a + b;
      else if (operation === "multiply") return a * b;
      else if (operation === "divide") return a / b;
      else if (operation === "substraction") return a - b;
      else return "Invalid operation";
    };
  };
}
evaluate("sum")(4)(5);
evaluate("multiply")(4)(5);
evaluate("divide")(4)(5);

// example 3 infinite currying

function sum(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}
console.log(add(4)(5)(3)(8));
