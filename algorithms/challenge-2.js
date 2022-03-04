function numSwap(number) {
  let temp = number.toString();
  let arrayNum = temp.split("");
  let arrayNumLength = arrayNum.length / 2;

  if (arrayNum.length % 2 === 0) {
    for (let i = 0; i < arrayNumLength; i++) {
      [arrayNum[2 * i], arrayNum[2 * i + 1]] = [
        arrayNum[2 * i + 1],
        arrayNum[2 * i]
      ];
    }
    return arrayNum;
  }
}
module.exports = numSwap;
