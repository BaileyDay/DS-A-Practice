let newArray = [-2, 0, 10, -19, 4, 6, -8];

var checkIfExist = function (arr) {
  const seen = [];
  for (let i = 0; i < arr.length; i++) {
    if (seen.includes(arr[i] * 2) || seen.includes(arr[i] / 2)) {
      return true;
    }
    seen.push(arr[i]);
  }
  return false;
};

checkIfExist(newArray);
