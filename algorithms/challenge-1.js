function missingNumber(numArr) {
  let missing = [];
  for (let i = 1; i <= 9; i++) {
    if (numArr.indexOf(i) === -1) {
      missing.push(i);
    }
  }
  if (missing.length === 0) {
    console.log("No missing number");
  } else if (missing.length === 1) {
    console.log(missing);
  } else {
    console.log(missing);
  }
}
module.exports = missingNumber;
