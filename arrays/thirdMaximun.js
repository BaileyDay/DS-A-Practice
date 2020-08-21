const newArray = [3, 2, 1];

var thirdMax = function (nums) {
  let numsSet = new Set(nums);
  let numsArray = Array.from(numsSet);
  if (numsArray.length <= 2) {
    return Math.max(...numsArray);
  }
  for (let i = 0; i < 2; i++) {
    let index = numsArray.indexOf(Math.max(...numsArray));
    numsArray.splice(index, 1);
  }
  return Math.max(...numsArray);
};
