function numSwap(number) {
  let temp = number.toString();
  let arrayNum = temp.split("");
  let midLength = arrayNum.length / 2;

  if (arrayNum.length % 2 === 0) {
    for (let i = 0; i < midLength; i++) {
      [arrayNum[2 * i], arrayNum[2 * i + 1]] = [
        arrayNum[2 * i + 1],
        arrayNum[2 * i]
      ];
    }
    return arrayNum;
  } else {
    return "The Length of the  Number must be Even";
  }
}
module.exports = numSwap;
