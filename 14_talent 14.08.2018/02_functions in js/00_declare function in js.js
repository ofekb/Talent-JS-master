//הגדרה רגילה של פונקציה
function f1(){
    console.log("f1");
}

//משתנה שמצביע לפונקציה
var f2=f1;


//פונקציה אנונימית
var f3=function (){
    console.log("f3");
}

//פונקציית חץ
var f4=()=>{
    console.log("f4");
}

f1();  //--> f1
f2();  //--> f1
f3();  //--> f3
f4();  //--> f4