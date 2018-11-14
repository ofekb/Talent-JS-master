function f1() {
    console.log("f1");
}


let f2 = f1;


let f3 = function () {
    console.log("f3");
}




let f4 = function innerF() {
    console.log("f4");
}


let f5 = () => { console.log("f5") }


let funcArray = [f1, f2, f3, f4, f5];

for (let singleFunc of funcArray)
    singleFunc();



/*
output:
________________________
f1
f1
f3
f4
f5
*/