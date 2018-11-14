//----------------VAL TYPE-------------------
let num1=3;
let num2=num1;  //num2 will contain the value that was stored in num1

console.log(`num1: ${num1}, num2: ${num2}`);  //--> num1: 3, num2: 3

num2=6;
console.log(`num1: ${num1}, num2: ${num2}`);  //--> num1: 3, num2: 6


//----------------REF TYPE-------------------
let arr1=[1,1,1,1];
let arr2=arr1;  //arr2 will contain the ref to the array that arr1 points

console.log(`arr1: ${arr1}, arr2: ${arr2}`);  //--> arr1: 1,1,1,1, arr2: 1,1,1,1

arr2[0]=6;
console.log(`arr1: ${arr1}, arr2: ${arr2}`);  //--> arr1: 6,1,1,1, arr2: 6,1,1,1

arr2=[9,9,9,9]
console.log(`arr1: ${arr1}, arr2: ${arr2}`);  //--> arr1: 6,1,1,1, arr2: 9,9,9,9

arr2[0]=5;
console.log(`arr1: ${arr1}, arr2: ${arr2}`);  //--> arr1: 6,1,1,1, arr2: 5,9,9,9


