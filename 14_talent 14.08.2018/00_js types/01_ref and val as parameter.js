//----------------VAL TYPE-------------------
let num1=3;
console.log(`num1: ${num1}`);  //--> num1: 3

changeNum(num1)
console.log(`num1: ${num1}`);  //--> num1: 3

function changeNum(num2){
    console.log(`num2: ${num2}`);  //--> num2: 3
    num2=6;
    console.log(`num2: ${num2}`);  //--> num2: 6
}


//----------------REF TYPE-------------------
let arr1=[1,1,1,1];
console.log(`arr1: ${arr1}`);  //--> arr1: 1,1,1,1

changeArr(arr1)
console.log(`arr1: ${arr1}`);  //--> arr1: 6,1,1,1

function changeArr(arr2){
    console.log(`arr2: ${arr2}`);  //--> arr2: 1,1,1,1
    arr2[0]=6;
    console.log(`arr2: ${arr2}`);  //--> arr2: 6,1,1,1
}

