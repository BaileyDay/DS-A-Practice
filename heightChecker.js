var heightChecker = function (heights) {
  let counter = 0;
  let compareArray = [...heights];
  compareArray.sort((a, b) => {
    return a - b;
  });
  for (i = 0; i < heights.length; i++) {
    if (heights[i] !== compareArray[i]) {
      counter++;
    }
  }

  return counter;
};
