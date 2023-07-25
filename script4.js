const nums = [1, 3, 4, 5, 6];
const newNum = nums.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(newNum);
