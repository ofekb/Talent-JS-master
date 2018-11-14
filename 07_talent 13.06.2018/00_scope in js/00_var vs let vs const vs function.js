/*
                 var     |           let       |         const       | function
 ________________________________________________________________________________________________
 redeclare      true                false               false           true
 ________________________________________________________________________________________________

*/ 


var a1=()=>{console.log("a1")};

function a2() {console.log("a2")}

let a3=()=>{console.log("a3")};

const a4=()=>{console.log("a4")};




//------------------------------redclaring----------------------

var a1=()=>{console.log("new a1")};

function a2() {console.log("new a2")}

//let a3=()=>{console.log("new a3")};  //SyntaxError: Identifier 'a3' has already been declared

//const a4=()=>{console.log("new a4")};   //SyntaxError: Identifier 'a4' has already been declared



//---------------------------------function call ----------------
a1();
a2();
a3();
a4();



/*

OUTPUT:
____________________________

new a1
new a2
a3
a4
*/