var sortArrayByParity = function (A) {
  let sortedArray = [];
  let oddNumbers = [];
  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 == 0) {
      sortedArray.push(A[i]);
    } else {
      oddNumbers.push(A[i]);
    }
  }
  for (let i = 0; i < oddNumbers.length; i++) {
    sortedArray.push(oddNumbers[i]);
  }
  return sortedArray;
};
