// objects in javascript

const property = "firstname";
const name = "piyush";
const user = {
  [property]: name,
};
console.log(user);

// how can iterate through an object

const User = {
  name: Ravi,
  age: 12,
  isTotallyAwesome: true,
};
for (key in User) {
  console.log(User[key]);
}

// what will be the output

const obj = {
  a: one,
  b: tow,
  a: three,
};

console.log(obj); // output will be a:3 b:2 two same keys with different values but the later value will replace the earlier value among the same key

// create a function that willl multiply all the numeric property value of an abject with 2

const nums = {
  a: 100,
  b: 200,
  title: "My nums",
};

multiplyByTwo(nums);

function multiplyByTwo(obj) {
  for (key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] = obj[key] * 2;
    }
  }
}
console.log(nums);

//JSON.stringify and JSON.parse

const info = {
  name: "ravi",
  age: 23,
};
console.log(info);
