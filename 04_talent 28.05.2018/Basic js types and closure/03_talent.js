//object type checks if the pointers in the stack 
//refers to the same object in the heap
var arr1=[];
var arr2=[];
var arr3=arr2;
console.log(arr1==arr2);  //false
console.log(arr3==arr2);  //true


//Primitive type checks if the content in the stack is the same
var a1=null;
var a2=null;

console.log(a1==a2);

var b1="talent";
var b2="talent";

console.log(b1==b2);  //true

console.log(Number.MIN_VALUE,Number.MAX_VALUE);  //5e-324 1.7976931348623157e+308