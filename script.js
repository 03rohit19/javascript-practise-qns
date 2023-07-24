var length = 10;
function foo() {
  console.log(this.length);
}

var obj = {
  length: 5,
  method: function (foo) {
    foo();
    arg[0]();
  },
};

obj.method(foo, 1);
