/*
                     var     |           let       |         const       | function
 ________________________________________________________________________________________________
 hoisting       yes(undefined)      no (Error)          no(Error)       yes (contains the function) 
 ________________________________________________________________________________________________
*/ 


//-----------function call (HOISTING - using before decleration) ------------


console.log("***********before***********");
//a1();  //TypeError: a1 is not a function
a2();
//a3();  //ReferenceError: a3 is not defined
//a4();  //ReferenceError: a4 is not defined


console.log(a1);
console.log(a2);
//console.log(a3);  //ReferenceError: a3 is not defined
//console.log(a4);  //ReferenceError: a4 is not defined


//----------------------------------declaration------------------------------

var a1=()=>{console.log("a1")};

function a2() {console.log("a2")}

let a3=()=>{console.log("a3")};

const a4=()=>{console.log("a4")};


//---------------------------------function call ----------------

console.log("***********after***********")
a1();
a2();
a3();
a4();


console.log(a1);
console.log(a2);
console.log(a3);  
console.log(a4); 


/*

OUTPUT:
____________________________

***********before***********
a2
undefined
[Function: a2]
***********after***********
a1
a2
a3
a4
[Function: a1]
[Function: a2]
[Function: a3]
[Function: a4]
*/