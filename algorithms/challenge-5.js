function arraySum(arr1, arr2) {
  let temp = [];
  let sum = [];
  for (let j = 0; j < arr1.length; j++) {
    sum = arr1[j] + arr2[j % arr2.length];
    temp.push(sum);
  }
  return temp;
}

module.exports = arraySum;
