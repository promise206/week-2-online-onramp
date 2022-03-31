/*
//Palindrome
function palindrome(str){
    let splitStr = str.split("");

    let revStr = splitStr.reverse();
    let joinStr = revStr.join("");
    return joinStr;

}

console.log(palindrome("3456"));
*/

/*
//Interger Reversal
function intRev(int){
    let convInt = String(int);
    let splitConv = convInt.split("");
    let reversedInt = splitConv.reverse().join("");
    console.log(reversedInt);
}
intRev(34567);
*/

/*
function stringChar(char){
    let charCounts = {};
    var maxKey = '';
    for(let i = 0; i < char.length; i++){

        let key = char[i];
        if(!charCounts[key]){
            charCounts[key] = 0;
        }
        charCounts[key]++;
        if(maxKey == '' || charCounts[key]>charCounts[maxKey]){
            maxKey = key;
        }
    }return console.log(charCounts[maxKey]);
}
stringChar("boooooookk");
*/

/*
function arrInt(arr){
    
    let tempArr = [];
    arr.forEach(element => {
        let sum = element;
    for(let i = 0; i< 5; i++){
        if(i === 0){
            tempArr.push(element);
        }else{
            sum = sum + element;
            
            tempArr.push(sum)
            
        }
        
        
    }
});
    console.log(tempArr);
}
arrInt([5]);
arrInt([1,4]);
*/

/*
let arrObject = [
    {name: "Mary", age: 35, gender: "female"},
    {name: "Stephen", age: 20, gender: "male"},
    {name: "Dave", age: 15, gender: "male"},
    {name: "Jane", age: 25, gender: "female"},
    {name: "John", age: 10, gender: "male"},
    {name: "Emeka", age: 30, gender: "male"},
    {name: "Lida", age: 10, gender: "female"},
];

function totalAge(arrObject){
    totalMaleAge = 0;
    totalFemaleAge = 0;
    for (const key in arrObject) {
        if(arrObject[key].gender === "male" && arrObject[key].age <= 25){
                totalMaleAge = totalMaleAge + arrObject[key].age;
            }
        
        if(arrObject[key].gender === "female" && arrObject[key].age <= 25){
            totalFemaleAge = totalFemaleAge + arrObject[key].age;
        }
    }
  console.log("Total Male: "+ totalMaleAge);
  console.log("Total Female: "+ totalFemaleAge);
}

totalAge(arrObject);
*/

/*
let arrObject = [
    {name: "Mary", age: 35, gender: "female"},
    {name: "Stephen", age: 20, gender: "male"},
    {name: "Dave", age: 15, gender: "male"},
    {name: "Jane", age: 25, gender: "female"},
    {name: "John", age: 10, gender: "male"},
    {name: "Emeka", age: 30, gender: "male"},
    {name: "Lida", age: 10, gender: "female"},
];

function numList(arr){
    for (let key in arr) {
        console.log(arr[key].name,arr[key].age, arr[key].gender);
    }

}
numList(arrObject);
*/

/*
function printStep(n){
    for(i = 0; i<n; i++){
       
        for(let j = 0; j<=n-1; j++){
            console.log(" ");
        }
        for(let j = 0; j<=i; j++){
            console.log("# \r")
        }
    }
}
printStep(3);
*/

/*
//Prime Number 
function isPrime(n){
    if(n===1 || n===0){
        return false;
    }
    if(n===2){
        return true;
    }
    for(let i = 2; i<=n; i++){
        if(n%i==0){
            return false
        }
        return true
    }
}
function checkPrime(n){
    for(let i = 1; i<=n; i++){
        if(isPrime(i)){
            console.log(i);
        }
    }
    return 0;
}
checkPrime(11);
*/

/*
//twoSum
function twoSum(arr, sum){
    for(let i = 0; i<arr.length; i++){
        

        for(j = i+1; j<arr.length; j++){
            let sumNum = arr[i]+arr[j];
            if(sumNum===sum){
                
                console.log(arr[i]+"+"+arr[j]+" = "+ sumNum)
            }
        }
    }
}
twoSum([3,5,2,4,6,3,4], 7)
*/

/*
function multiOccurance(char){
    let tempArr = {};
    let count = 0;
    let splitChar = char.split("");
    for(let i = 0; i<splitChar.length; i++){

        count++
        for(j = i+1; j<splitChar.length; j++){
            if(splitChar[i]===splitChar[j]){
                tempArr.push(splitChar[j])
            }
        }
        
    }
    console.log(tempArr);
}
multiOccurance("boookkk")
*/
/*
//Distinct
function distintEle(arr){
    const newArr = [];
    for(let i = 0; i<arr.length; i++){

        if(!newArr.includes(arr[i])){
            newArr.push(arr[i]);
           
        }
    }
    console.log(newArr)
}

distintEle([1,1,5,6, 9, 7, 3,4,5,5])

/*
//missing number
function missing(arr){
    const newArr = [];
    for(let i = 1; i<9; i++){

        if(!arr.includes(i)){
            newArr.push(i);
           
        }
    }
    console.log(newArr)
}

missing([1,2,5,7,8])
*/

// function arrJunking(arr, value){
//     newArr =[];
//    for (let index = 0; index < arr.length; index++) {
//        for(let j = index; j<value; j++){
//          let sum =arr.shift();
//          newArr.slice(3,5)
//        }
//    }
//    console.log(newArr)

// }
// arrJunking([2,4,5,6,8,9], 2);
/*
//palidrome
function palindrome(char){

    let paliChar = char.split(" ").reverse().join("")
    

    if(paliChar === char){
        return char+ " is a palindrome";
    }else{
    return char+" is not a palindrome";
    }

}
console.log(palindrome("race a car"));
console.log(palindrome("144241"));
console.log(palindrome("15551"));
console.log(palindrome(""));
console.log(palindrome("race car"));
*/

// function countChar(char){
//     count = 0;
//     tempArr = {};
//     for(i = 0; i<char.length;i++){
//         for(j = i+1; j<char.length; j++){
//             if(char[i]===char[j]){
//                 tempArr.push(char);
//             }
//         }
//     }
//     return tempArr;
// }
// console.log(countChar("helloooo"));

// Do not modify the dictionary below



const deutschDict = {
    er: 'he',
    sie: 'she',
    es: 'it',
    du: 'you',
    ich: 'I',
    wir: 'we',
    ihr: 'you',
    brot: 'bread',
    ein: 'a',
    eine: 'a',
    frau: 'woman',
    mann: 'man',
    kind: 'child',
    madchen: 'girl',
    junge: 'boy',
    bist: 'are',
    bin: 'am',
    ist: 'is',
    und: 'and',
    wasser: 'water',
  };
  // Do not modiy the dictionary above
  
  function deutschTranslator(sentence) {
    // Write your code here
    let englishConvert = []
    let splitChar = sentence.split(" ")
    for(let i = 0; i<splitChar.length; i++){
      let word = splitChar[i];
      let wordToLower = word.toLowerCase();
      for(const key in deutschDict ){
        if(key == wordToLower){
            englishConvert.push(deutschDict[key]);
         }
        //console.log(deutschDict[key]);
      }
      
      //console.log(deutschDict[i])
    }
    return englishConvert.join(" ")
  }
 console.log(deutschTranslator("Madchen ist"));

 

 /*
 function sumAge(arr){
     let result = {
         male: 0,
         female: 0
     }

     for(let key in arr){
         if(arr[key]["gender"]==="male" && arr[key]["age"]<=25){
             result["male"] += arr[key]["age"];
         }else if(arr[key]["gender"]==="female" && arr[key]["age"]<=25){
             result["female"] += arr[key]["age"];
         }

         }
         return result
     }

     console.log(sumAge([{gender:"male",name:"Promise",age:25},{gender:"male",name:"Dozie",age:20},{gender:"female",name:"Ada",age:18}]));
     */