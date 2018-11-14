//---------------NUMBER IS VAL TYPE--------------------

function f1(param){
    console.log(`f1 before change: ${param}`);
    param=7;
    console.log(`f1 after change: ${param}`);
}




var num=2;
console.log(`num before f1 call: ${num}`);
f1(num);
console.log(`num after f1 call: ${num}`);

/*
OUTPUT:
____________________________
num before f1 call: 2
f1 before change: 2
f1 after change: 7
num after f1 call: 2

*/ 