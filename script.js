const object = {
  who: "World",

  greet() {
    return `Hello, ${this.who}!`;
  },

  farewell: () => {
    const what = "World"; // Using a closure to capture the value of "who"
    return `Goodbye, ${what}!`;
  },
};

console.log(object.greet()); // Output: Hello, World!
console.log(object.farewell()); // Output: Goodbye, World!
