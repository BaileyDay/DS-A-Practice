testArray = [1, 0, 2, 3, 0, 4, 5, 0];

var duplicateZeros = function (arr) {
  let length = arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      arr.splice(i, 0, 0);
      i++;
    }
  }
  while (arr.length > length) {
    arr.pop();
  }
};

duplicateZeros(testArray);
console.log(testArray);
