/*
const name = 'john';
const age = 30;
const rating = 4.5;
const isCool = true;
let z;

console.log(typeof x);
*/

/*
//concatenation
const uname = 'john';
const age = 30;
console.log('My name is ' + uname + 'and my age is ' + age );

//Template String
console.log(`My name is ${uname} and I am age ${age}`);
*/

/*
//length of a character
const s = 'I am learning Javascript!';
console.log(s.length);

//how to change the case
console.log(s.toUpperCase());

//pull substring
console.log(s.substring(0, 5).toLowerCase());

//split a string into an array
const now = 'technology, computers, it, code';
console.log(now.split(', '));
*/

/*
//Arrays - variables that hold multiple values
const numbers = new Array(1, 4, 5, 6, 7);
const fruits = ['apples','mango','apple', 'oranges', 'pineapple'];

fruits[3] = 'grapes';

//to add into the end of an array
fruits.push('mangos');
//to add to the beginning
fruits.unshift('goeva');
console.log(fruits);
//to take the last on off
fruits.pop();
//to check if something is in the array
console.log(Array.isArray('hello'));
//to get index of a certain value
console.log(fruits.indexOf('oranges'));
*/

/*
//Object
const person = {
    firstName: 'Chukwuka',
    lastName: 'Okpalaugo',
    age: 27,
    hobbies: ['music','movies'],
    address: {
        street: 'No 360 Odim street',
        city: 'Nnewi',
        state: 'Anambra'
    }
    
}

console.log(person.firstName);
console.log(person.hobbies[1]);
console.log(person.address.city);

//pulling from an object
const{firstName,address:{city}, lastName} = person;

//adding property into an object
person.email = 'okpalaugo.chukwuka1@gmail.com';

console.log(person);

*/

/*
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 1,
        text: 'Dentist appt',
        isCompleted: false
    }
];

//convert to json format
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);
*/

/*
//for loop
for(let i = 0; i < 10; i++){
    console.log(i);
    console.log(`For Loop Number: ${i}`);
}

//while
let i = 0;
while(i<10){
    console.log(i);
    console.log(`While Loop Number: ${i}`);
    i++;
}

for(let todo of todos){
    console.log(todo.id);
}
*/

/*
//forEach, map, filter
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 1,
        text: 'Dentist appt',
        isCompleted: false
    }
];

const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
});

console.log(todoCompleted);
*/

/*
//Conditionals
const x = 6;
const y = 11;

if(x < 4 || y>10){
    console.log('x is greater than 5 and y is grater than 10');
}

*/

/*
//tenary Operator
const x = 10;

const color = (x>10)? 'Yes' : 'No';
console.log(color);
*/

/*
//Switch Statement
color = 'Red';
switch (color) {
    case 'red':
        console.log('color is red');
        
        break;
    case 'blue':
        console.log('color is blue');
        
        break;

    default:
        console.log('Color is Not red or Blue');
        break;
}
*/

/*
//function
function addNums(num1 = 1, num2 = 3){
    return num1 + num2;
}

console.log(addNums(10, 10));

//optimized
const addNum = num3 => num3 + 10;
console.log(addNum(5));
*/

/*
//Constructor Function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    //start multiline comment
    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }
    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
    //close multiline comment
}

Person.prototype.getBirthYear = function(){
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}

//instantiate object
const person1 = new Person('John','Doe', '5-11-1994');

console.log(person1.getBirthYear());
console.log(person1.getFullName());
*/

/*
//Class
class Person{
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}
*/
//Instantiate object of the class
const person1 = new Person('Okpalaugo','Chukwuka','5-11-1994');

console.log(person1.getFullName());
x = 2;
y = 3;
console.log(x + y);


