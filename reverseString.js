string = "cat";

const reverseString = function (str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "No String";
  }
  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  console.log(backwards);
  return backwards.join("");
};

reverseString(string);

function reverse2(str) {
  return str.split("").reverse().join();
}
