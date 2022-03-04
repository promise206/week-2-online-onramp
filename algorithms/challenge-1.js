function missingNumber(numArr) {
  let missing = [];
  for (let i = 1; i <= 9; i++) {
    if (numArr.indexOf(i) === -1) {
      missing.push(i);
    }
  }
  if (missing.length === 0) {
    return false;
  } else if (missing.length === 1) {
    return missing;
  } else {
    return missing;
  }
}
module.exports = missingNumber;
