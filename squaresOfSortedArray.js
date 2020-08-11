// Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

var sortedSquares = function (A) {
  let newArray = [];
  for (let i = 0; i < A.length; i++) {
    let squaredNumber = Math.pow(A[i], 2);
    newArray.push(squaredNumber);
  }
  return newArray.sort(function (a, b) {
    return a - b;
  });
};
