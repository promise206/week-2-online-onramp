function missingNumber(numArr) {
  let missing = [];
  for (let i = 1; i <= 9; i++) {
    if (numArr.indexOf(i) === -1) {
      missing.push(i);
      console.log(missing);
    }
  }
}

module.exports = missingNumber;
