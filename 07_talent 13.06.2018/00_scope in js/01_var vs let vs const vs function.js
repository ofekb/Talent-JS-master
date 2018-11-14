/*
                 var     |           let       |         const       | function
 ________________________________________________________________________________________________
 re-asiggn      true                true                false           /
 ________________________________________________________________________________________________
*/ 




var a1=()=>{console.log("a1")};

function a2() {console.log("a2")}

let a3=()=>{console.log("a3")};

const a4=()=>{console.log("a4")};



//------------------------------reassign----------------------

a1=()=>{console.log("new a1")};

a3=()=>{console.log("new a3")};  

//a4=()=>{console.log("new a4")};  //TypeError: Assignment to constant variable.

//---------------------------------function call ----------------
a1();
a2();
a3();
a4();




/*

OUTPUT:
____________________________

new a1
a2
new a3
a4
*/