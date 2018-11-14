function executeFunc(param) {
    param();
}


function f1() {
    console.log("f1");
}

let f2=f1;

let f3=function(){
    console.log("f3");
}


let f4=()=>{
    console.log("f4");
}

executeFunc(f1);
executeFunc(f2);
executeFunc(f3);
executeFunc(f4);

/*
OUTPUT:
________________
f1
f1
f3
f4
*/