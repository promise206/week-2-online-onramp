function increment(arr, value) {
  let arrLength = arr.length;
  for(let i = 0; i < arrLength; i++){
      arr[i]["val"] = arr[i]["val"] + value;
  }
  return arr;
  }
module.exports = increment;
