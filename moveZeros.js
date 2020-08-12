var moveZeroes = function (nums) {
  let countedZeros = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      countedZeros++;
      nums.splice(i, 1);
      i--;
    }
  }
  for (i = 0; i < countedZeros; i++) {
    nums.push(0);
  }
};
