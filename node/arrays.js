let a = [4, 8, 15, 16, 23, 42];
let b = ['david', 'eddie', 'alex', 'michael'];

/*
console.log(a[0]);
console.log(a[1]);
console.log(a);
*/
//a[0] = 7;
//console.log(a);

//object

//let c = [4, 'alex', true];
//console.log(c);

//length of array
//console.log(a.length); //actual number, not zero based

/*
unsafe way to add element in an array, it will create empty items before the index
a[10] = 77;
console.log(a);
console.log(a.length);
*/

//safe way to add element in an array
a.push(77);
console.log(a);
console.log(a.length);
a.pop();
a.pop();
console.log(a);
console.log(a.length);