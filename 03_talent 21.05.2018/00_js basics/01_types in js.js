/*
ref : string | function | object

val : number | boolean | null | undefined

___________________________________

primitive type (built-in) : 
number | boolean | null | undefined | string

*/ 

let a;

a=1;  //number
console.log(a,typeof(a));

a="Talent";  //string
console.log(a,typeof(a));

a=true;  //boolean
console.log(a,typeof(a));

a=null;  //object
console.log(a,typeof(a));

a=undefined;  //undefined
console.log(a,typeof(a));

a=()=>{};  //function
console.log(a,typeof(a));

a={};  //object
console.log(a,typeof(a));

a=[1,2,3];  //object
console.log(a,typeof(a));

a=new Date();  //object
console.log(a,typeof(a));