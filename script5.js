// pollyfill for map (), reduce() and filter()

// pollyfill for map

Array.prototype.myMap = function (num) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(num(this[i]));
  }
  return temp;
};

const arr = [1, 2, 3, 4, 5, 6];
const multiplyNum = arr.myMap((num) => {
  return num * 2;
});
console.log(multiplyNum);
