//  SELF INVOKE FUNCTION
(function f1(){
    console.log("f1");
})()


var f2=function(){
    console.log("f2");
}



var f3=()=>{
    console.log("f3");
}

var f4=f2;

f2();
f3();
f4();




/*
output:
______________
f1
f2
f3
f2

*/