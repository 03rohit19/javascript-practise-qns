// first class function : function passed inside a function as an argument is known as first class function

function sqr(num) {
  return num * num;
}

function displaySqr(fn) {
  console.log("Square is" + fn(5));
}
displaySqr(sqr);

// spread operators

function multiply(n1, n2) {
  console.log(n1 * n2);
}

var arr = [4, 5];
multiply(...arr);

// closure in javasript

function createBase(num) {
  return function (innerNum) {
    console.log(innerNum + num);
  };
}
var addsix = createBase(6);
addsix(10); //return 16

// How would you choose a closure to cretate a counter

function counter() {
  var _counter = 0;

  function add(increment) {
    counter = counter + increment;
  }
  function retreive() {
    return "counter =" + counter;
  }

  return {
    add,
    retreive,
  };
}

const c = counter();
c.add(5);
c.add(10);
console.log(c.retreive()); // counter = 15
