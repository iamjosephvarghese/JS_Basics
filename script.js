console.log('Hello World!');

var name = 'John';
console.log(name);

var lastName = "Smith";
console.log(lastName);

var age = 26;
console.log(age);

/*Data Types in Javascript
number,string.boolean,undefined,null
Javascript has dynamic typing!!!
*/
var fullAge = true;
console.log(fullAge);

//example for type conversion
console.log(name+age);

//No type conversion:addition takes place
console.log(age + age);

//undefined will be assigned
var job,isMarried;
console.log(job);

job = "coder";
isMarried = false;

console.log(name + ' is ' + age + ' years old. He is a ' + job + '.Is he married? ' + isMarried + '.');


//Variable Mutation,can change the data type
age = 'thirty six';
job = 'driver'
console.log(name + ' is ' + age + ' years old. He is a ' + job + '.Is he married? ' + isMarried + '.');

//A prompt window will come
//var newName = prompt('What is the last name?');
//console.log(newName)

//Show details in alert window:not in the console!!!
//alert(name + ' is ' + age + ' years old. He is a ' + job + '.Is he married? ' + isMarried + '.');

var myAge = 26;
var birthYear = 2017 - myAge;
console.log(birthYear);


//if-else
var name2 = 'jo'
var married = 'no'
var age2 = 36

if (married === 'yes') {
    console.log('married');
}else {
  console.log('not married');
}



/*difference between == and ===
== type conversion alllowed
=== type conversion not alllowed
*/

if (23 == '23') {
  console.log('equal ==');
}else {
  console.log('not equal ==');
}


if (23 ==='23') {
  console.log('equal ===');
}else {
  console.log('not equal ===');
}


//boolean
var age3 = 16;
if (age3 <20) {
  console.log('John is a teenager!');
}else {
  console.log('John is a man!');
}


//functions
function calculateAge(yearOfBirth){
  var age4 = 2017 - yearOfBirth;
  return age4;
}

//function call
var ageJohn = calculateAge(1990);
var ageMary = calculateAge(1986);
console.log('age of john is ' + ageJohn);
console.log('age of mary is ' + ageMary);


function yearsUntilRetirement(name,yearOfBirth){
  var findAge = calculateAge(yearOfBirth);
  var left = 65 - findAge;
  if(left > 0){
    console.log(name + ' has ' + left + ' years left until retirement!');
  }else if (left == 0) {
    console.log(name + "'s last year!" );
  }else {
    console.log(name + ' already retired!');
  }
}

yearsUntilRetirement('John',1990);
yearsUntilRetirement('Mary',1948);
yearsUntilRetirement('Jose',1952);

//statements and expressions
//var calculateAge = function(yearOfBirth)     expression

//Arrays -- different datatypes possible
var names = ['john','jane','james'];
var yearBorn = new Array(1990,1969,1958);
console.log(names);
console.log(names[0] + yearBorn[0]);

var joseph = ['Joseph','Varghese',1997,'Student',false];
//add to end of array --push
joseph.push('blue');
//added blue at the end
console.log(joseph);

//add at beginning --unshift
joseph.unshift('Mr.');
//added Mr. at the beginning
console.log(joseph);

//removes from end
joseph.pop();
//removed blue from the end
console.log(joseph);

//removes from beginning
joseph.shift();
//removed Mr. from the beginning
console.log(joseph);

//To find index of an element in the array
var index = joseph.indexOf('Varghese');
console.log(index);

if(joseph.indexOf('Teacher') === -1){
  //returns -1 if element not present in array
  console.log('Joseph is not a teacher');
}

if(joseph.indexOf('Student') != -1){
  console.log('Joseph is a Student!');
}


//Objects
/*
key value pairs
no particular order
*/
var john2 = {
  name: 'John',
  lastName: 'Smith',
  birthYear: 1990,
  job: 'Teacher',
  isMarried: false
};
console.log(john2);
console.log(john2.lastName);
console.log(john2['lastName']);

//another way
var xyz = 'job';
console.log(john2[xyz]);

john2.job = 'Coder';
console.log(john2);


var jane2 = new Object();
jane2.name = 'Jane';
jane2.yearOfBirth = 1969;
jane2.job = 'retired';
jane2.isMarried = true;
console.log(jane2);

//objects more
var john3 = {
  name: 'John3',
  lastName: 'Smith',
  birthYear: 1990,
  job: 'Teacher',
  isMarried: false,
  family: ['a','b','c'],
  //function expression is used not function statement
  calculateAge: function(){
    //return 2016 - this.birthYear;
    this.age = 2016 - this.birthYear;
  }
};
console.log(john3.family[2]);
john3.calculateAge();
console.log(john3);

//Loops
//for loop
for (var i = 0; i < 10; i++) {
  console.log(i);
}

console.log('Printing from an array using the index values and length function');
var names3 = ['a','b','c','d','e'];
for ( var i = 0 ; i < names3.length; i++){
  console.log(names3[i]);
}

console.log('Priniting reverse');
for ( var i = names3.length -1; i >= 0 ; i--){
  console.log(names3[i]);
}

//while loop
console.log('while loop');
var i = 0;
while(i < names3.length){
  console.log(names3[i]);
  i++
}

//break and continue as usual

//this keyword
//by default points to global scope -- to window
//window object
console.log(this);
