//value type-------------------------------
let num1=4;
let num2=num1;
console.log("num1",num1);  
console.log("num2",num2);

num2=9;

console.log("num1",num1);
console.log("num2",num2);




//ref type---------------------------------
let obj1={num:4};
let obj2=obj1;
console.log("obj1",obj1);  
console.log("obj2",obj2);

obj2.num=9;

console.log("obj1",obj1);  
console.log("obj2",obj2);


/*
OUTPUT:
______________________
num1 4
num2 4
num1 4
num2 9
obj1 { num: 4 }
obj2 { num: 4 }
obj1 { num: 9 }
obj2 { num: 9 }

*/