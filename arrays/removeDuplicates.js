var removeDuplicates = function (nums) {
  const seenNumbers = [];
  for (i = 0; i < nums.length; i++) {
    if (!seenNumbers.includes(nums[i])) {
      seenNumbers.push(nums[i]);
    } else {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};
