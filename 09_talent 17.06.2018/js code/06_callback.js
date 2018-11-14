function executeFunc(param) {
    param();
}


function f1() {
    console.log("f1");
}

function f2() {
    console.log("f2");
}


executeFunc(f1);
executeFunc(f2);


/*
OUTPUT:
________________
f1
f2

*/