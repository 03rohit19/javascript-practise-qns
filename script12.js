let printName = function (location, time) {
  console.log(
    `Hii , ${this.firstName} ${this.lastName} lets play football at ${location} in morning at ${time} `
  );
};

let player1 = {
  firstName: "Rohit",
  lastName: "Singh",
};
let player2 = {
  firstName: "Sunil",
  lastName: "Chettri",
};

// So Bind and Apply is kind of like function borrowing the only diffrence is in apply we pass extra arguments in the form of arrays.

printName.call(player1, "BSF Campus", "8 AM");
printName.apply(player2, ["BSF Campus", "9 AM"]);
let printMyName = printName.bind(player1, "Rajkot BSF campus", "10 AM");
printMyName();

// Bind Method : In bind method we can bind the function to the object as a copy and can invoke it later whenever we want.
