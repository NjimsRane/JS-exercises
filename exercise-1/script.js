//Exercice 1
let myAlphabet = ['A','B','C','D','E','F','G'];
//1. what is the length of the array?
console.log('Exercice1');
console.log(`arrayLength = the array length is ${myAlphabet.length}`);
// 2. Write a function called myAlphabetLength which consol.logs the length of the array

function myAlphabetLength(){
    console.log(myAlphabet.length);
    if(myAlphabet.length < 4){
        console.log('items inside this array are less than 4' ,'\n');
    }else{
        console.log('items inside this array are more than 4','\n');
    }
}
myAlphabetLength();
/* ****** ****************
*******************************/ 
// Exercise 2 
//1. 1. Declare a fucntion (checkFunc) that takes a string and a boolean as parameters 
console.log('Exercice2');
function checkFunc(str,bool){
    console.log(`${str} is  a string, ${bool} is a boolean`);
    console.log();
}
checkFunc("NjimsRane",true);
/* ****** ****************
*******************************/ 
// Exercise 3
// 1. Declare and initialize an array called (planets) with 5 string values
console.log('Exercice3');
let planets = ['Mars','Pluton','Jupiter','Venus','Earth'];
planets.forEach(function(planet,index){
    console.log(`planet = ${planet} is at index ${index}`);
});
console.log();
/* ****** ****************
*******************************/ 
// Exercise 4 
// 1. Declare and initialize an array called (wowDatatypes)
console.log('Exercice4');
let wowDatatypes = ['NjimsRane',true,12,undefined,null];
// 3. Iterates over the array and console.log each item in the array + it`s index and data type in the array
wowDatatypes.forEach(function(dataType,index){
    console.log(`${dataType} is a ${typeof dataType} data type at ${index} index`);
})
console.log();
console.log('Exercice5');
//Exercise 5
// 1. console.log each item in this array without using a for loop
let myArray = [1,2,'One',true];
myArray.map(function(item){
    console.log(item);
})