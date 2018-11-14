
f1();
f2();  //TypeError: f2 is not a function (f2 is now undefined)

function f1() {
    console.log("f1");
}


var f2 = function () {
    console.log("f2");
}
