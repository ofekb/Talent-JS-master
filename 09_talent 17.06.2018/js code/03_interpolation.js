
let res=8;


let str1= "res is: "+res+" the end "+ Date.now()+"!!";
let str2= 'res is: ' +res+' the end '+ Date.now()+'!!';
let str3= `res is: ${res} the end ${Date.now()}!!`;

console.log("str1",str1);
console.log("str2",str2);
console.log("str3",str3);


/*

OUTPUT:
_______________________
str1 res is: 8 the end 1529250864483!!
str2 res is: 8 the end 1529250864483!!
str3 res is: 8 the end 1529250864483!!

*/