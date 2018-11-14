/*


                var     |           let       |         const       | function
 ________________________________________________________________________________________________
 redeclare      true                false               false           true
 ________________________________________________________________________________________________
 re-asiggn      true                true                false           /
 ________________________________________________________________________________________________
 hoisting       yes(undefined)      no (Error)          no(Error)       yes (contains the function) 
 ________________________________________________________________________________________________
 scope          function            block               block`          function
*/ 


//console.log(b);  --> ReferenceError: b is not defined
var a=6;
var a=8;

let b=7;
//let b=8;  --> SyntaxError: Identifier 'b' has already been declared


const c =7;
//const c =7;  --> SyntaxError: Identifier 'c' has already been declared

f1();
console.log(f1)

function f1(){
    console.log("v1")
}


function f1(){
    console.log("v2")
}

console.log(f2)
//f2()  --> TypeError: f2 is not a function
var f2=function(){
    console.log("f2")
}

