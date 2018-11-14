// DTZ - DEAD TIME ZONE (the part that const / var exists in the memory but are not accessable)


//-------------------------var------------------
var a1=2;
console.log(`before f1:  ${a1}`);

(function f1(){  //here a new a1 is created in the memory

    console.log(`Inside f1 before decleration:  ${a1}`);

    var a1=4;

    console.log(`Inside f1 after decleration:  ${a1}`);

})();

console.log(`after f1:  ${a1}`);


//-------------------------let------------------

let b1=2;
console.log(`before f2:  ${b1}`);
(function f2(){  //here a new b1 is created in the memory

    //console.log(`Inside f2 before decleration:  ${b1}`); //ReferenceError: b1 is not defined - DTZ

    let b1=4;

    console.log(`Inside f2 after decleration:  ${b1}`);
    
})();

console.log(`after f2:  ${b1}`);


/*
OUTPUT
__________________________________________

before f1:  2
Inside f1 before decleration:  undefined
Inside f1 after decleration:  4
after f1:  2
before f2:  2
Inside f2 after decleration:  4
after f2:  2

*/