//value type-------------------------------
let num1=new  Number(4);
let num2=num1;
console.log("num1",num1);  
console.log("num2",num2);

num2=9;

console.log("num1",num1);
console.log("num2",num2);


/*
OUTPUT:
___________
num1 [Number: 4]
num2 [Number: 4]
num1 [Number: 4]
num2 9
*/