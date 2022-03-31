
/*
//single element
document.getElementById('my-form');
document.querySelector('.container');

//Multiple Element
const items = document.querySelectorAll('.item');
//console.log(document.getElementsByClassName('item'));
items.forEach((item)=>console.log(item));
*/

/*
const string1 = "Decagon";

splitString1 = string1.split('');
let i = 0;
splitString1.forEach(element => {
    switch(splitString1[i]){
        case "e":
            console.log(splitString1[i]);
            break;
        case "a":
            console.log(splitString1[i]);
            break;
        case "o":
            console.log(splitString1[i]);
            break;
        case "i":
            console.log(splitString1[i]);
            break;
        case "u":
            console.log(splitString1[i]);
            break;
        default:
    }
    i++
});
*/

/*
function fullName(firstname, lastname){
    let lastnameInitial = lastname[0];
    console.log(firstname, lastnameInitial + '.' );
}

fullName("Chukwuka","Okpalaugo");




function missingNumber(numArr) {
    let missing = [];
    for (let i = 1; i <= 9; i++) {
      if (numArr.indexOf(i) === -1) {
        missing.push(i);
      }
    }
    if(missing.length == 0){
        console.log("No missing number");
    }else if(missing.length == 1){
        console.log(missing);
    }
    else{
        console.log(missing);
    }
  }

missingNumber([1,2,3,4,6,7,8,9]);
missingNumber([1,2,3,4,5,6,8]);
missingNumber([1,2,3,4,5,6,7,8,9]);

*/

/*
function numSwap(number) {
    let temp = number.toString();
    let arrayNum = temp.split("");
    let midLength = arrayNum.length / 2;
  
    if (arrayNum.length % 2 === 0) {
      for (let i = 0; i < midLength; i++) {
        [arrayNum[2 * i], arrayNum[2 * i + 1]] = [arrayNum[2 * i + 1], arrayNum[2 * i]];
      }
      let joinArrayNum = arrayNum.join('');
      console.log(joinArrayNum);
    } else {
        console.log("The Length of the Number Must be Even");
    }


}
numSwap(1234);
numSwap(432156);
*/

/*
function increment(arr, value) {
let arrLength = arr.length;
for(let i = 0; i < arrLength; i++){
    arr[i]["val"] = arr[i]["val"] + value;
}
return arr;
}
console.log(increment([{ val: 1 }, { val: 2}, { val: 3 }], 2));
console.log(increment([{ val: 10 }, { val: 20}, { val: 30 }], 5));


function withdraw(amount) {
let amountLess100 = amount%100;
let hunderedNaira = (amount - amountLess100)/100;
let amountLess50 = amountLess100 % 50
let fiftyNaira = (amountLess100 - amountLess50)/50;
let twentyNaira = amountLess50/20;
console.log(amountLess100);
return[hunderedNaira, fiftyNaira, twentyNaira];
}

console.log(withdraw(250));
console.log(withdraw(370));

*/

/*
function arraySum(arr1, arr2) {
    let temp = [];
        for(let j = 0; j<arr1.length; j++){
           let sum = arr1[j] + arr2[j % arr2.length];
            temp.push(sum);
        }
        return temp
}

console.log(arraySum([1,2,4,5,6,2,1], [2,3,5]));
console.log(arraySum([10,20,30,40,50], [20,40,60]));


function charString(str){
    splitChar = str.split("");
    let count = 0;
    for(i = 0; i<str.length; i++){
        charSet = splitChar[i];
        if(charSet === splitChar[i]){
            count++;
            
        }
        console.log(splitChar[i])
        
        
    }
    
}
charString("Boom");
*/

function palindrome(str){
    let splitStr = str.split("");
    console.log
}
