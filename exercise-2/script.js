// Exercise-1
//1. Write a JavaScript function to clone an array.
array1 = [1, 2, 4, 0];
array2 =[1, 2, ['rane', 0]];

//method 1 , using slice
function cloneArray1(arr){
    const clone1 = arr.slice();
    console.log(`clone1 = ${clone1}`);
    console.log(`type = ${typeof clone1}`);
    console.log(`length = ${clone1.length}`);
}
cloneArray1(array1);
console.log();

//method 2 using destructuring
function cloneArray2(arr){
    const clone2 = [...arr];
    console.log(`clone2 = ${clone2}`);
    console.log(`type = ${typeof clone2}`);
    console.log(`length = ${clone2.length}`);
}
cloneArray2(array2);
console.log();
/****************************************/

//Exercise-2 
myColor = ["Red", "Green", "White", "Black"];
/* 1-Write a simple JavaScript program to join all elements of the following array into
 a string.*/
 const joinMyColor = myColor.join(",");
 console.log(`joinMyColor = ${joinMyColor}`);