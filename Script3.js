const obj = {
  message: "Hello World",
  logMessage() {
    console.log(this.message);
  },
};

setTimeout(obj.logMessage, 1000); //undefined after 1 sec
setTimeout(
  () => obj.logMessage(),

  1000
); // log hello world after 1 sec

// -While setTimeout() function uses the object.logMessage as a callback, still, it inovkes object.logMessage as a regular

//  function, rather than a method.

//  -And during a regular function invocation this equals the global object, which is window in the case of the browser

//   environment.

//  -That’s why console.log(this.message) inside logMessage method logs window.message, which is undefined.
