var length = 4;

function fn() {
  console.log(this.length);
}

const obj = {
  length: 6,
  method(fn) {
    fn();
  },
};

obj.method(fn, 1, 2);

// output :
