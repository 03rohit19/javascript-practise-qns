const object = {
  message: "Hello, World!",
};

function logMessage() {
  console.log(this.message); // "Hello, World!"
}

//There are at least 3 ways how to call logMessage() as a method on the object. Any of them is considered a correct answer:

function logMessage() {
  console.log(this.message); // logs 'Hello, World!'
}

// Using func.call() method
logMessage.call(object);

// Using func.apply() method
logMessage.apply(object);

// Creating a bound function
const boundLogMessage = logMessage.bind(object);
boundLogMessage();
