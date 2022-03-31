function romanToDecimal(roman) {
  let total = 0;
  let i = 0;
  let input = roman.toLowerCase()

const converter = {
  i: 1,
  v: 5,
  x: 10,
  l: 50,
  c: 100,
  d: 500,
  m: 1000,
}
    
  while(i<input.length){
    let current = input[i];
    let next = input[i+1]

    if(converter[current] < converter[next]){
      total += converter[next] - converter[current]
      i += 2;
    }else{
      total += converter[current]
      i++
    }
  }
  return total
}
console.log(romanToDecimal("XI"))

//module.exports = romanToDecimal
