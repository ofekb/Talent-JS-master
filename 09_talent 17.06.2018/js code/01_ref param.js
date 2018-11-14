//---------------ARRAY IS REF TYPE--------------------

function f1(param){
    console.log(`f1 before change: ${param}`);
    param[0]=7;
    console.log(`f1 after change: ${param}`);
}




var arr=[1,2,3,4];
console.log(`arr before f1 call: ${arr}`);
f1(arr);
console.log(`arr after f1 call: ${arr}`);

/*
OUTPUT:
___________________________
arr before f1 call: 1,2,3,4
f1 before change: 1,2,3,4
f1 after change: 7,2,3,4
arr after f1 call: 7,2,3,4

*/