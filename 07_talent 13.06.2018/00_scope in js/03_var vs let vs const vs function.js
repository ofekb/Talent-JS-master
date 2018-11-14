/*
                     var     |           let       |         const       | function
 ________________________________________________________________________________________________
 scope          function            block               block               function
 ________________________________________________________________________________________________
*/



//----------------------------------declaration (in function)------------------------------

function test() {

    var a1 = () => { console.log("a1") };

    function a2() { console.log("a2") }

    let a3 = () => { console.log("a3") };

    const a4 = () => { console.log("a4") };

    console.log("***********in test function***********");
    a1();
    a2();
    a3();
    a4();
}

//a1(); - out of scope
//a2(); - out of scope
//a3(); - out of scope
//a4(); - out of scope


test();

//----------------------------------declaration (in block)------------------------------
{
    var b1 = () => { console.log("b1") };

    function b2() { console.log("b2") }

    let b3 = () => { console.log("b3") };

    const b4 = () => { console.log("b4") };


    console.log("***********in block***********");
    b1();
    b2();
    b3();
    b4();
}



console.log("***********after block***********");
b1();
b2();
//b3(); - out of scope
//b4(); - out of scope




/*

OUTPUT:
____________________________

***********in test function***********
a1
a2
a3
a4
***********ibn block***********
b1
b2
b3
b4
***********after block***********
b1
b2
*/