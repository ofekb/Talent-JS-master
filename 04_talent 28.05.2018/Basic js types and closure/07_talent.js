//----------CLOSURE----------------

function outer(num) {
    let myNum = num * 2;

    return () => { console.log(`
            original parameter: ${num}
            myNum: ${++myNum}`); 
        }
}


let firstCall=outer(1);
let secondCall=outer(100);

for(let i=0;i<=5;i++){
    console.log(`---------------iteration ${i}--------------`); 
    firstCall();
    secondCall();
}

/*

output:
________________________________________


---------------iteration 0--------------

            original parameter: 1
            myNum: 3

            original parameter: 100
            myNum: 201
---------------iteration 1--------------

            original parameter: 1
            myNum: 4

            original parameter: 100
            myNum: 202
---------------iteration 2--------------

            original parameter: 1
            myNum: 5

            original parameter: 100
            myNum: 203
---------------iteration 3--------------

            original parameter: 1
            myNum: 6

            original parameter: 100
            myNum: 204
---------------iteration 4--------------

            original parameter: 1
            myNum: 7

            original parameter: 100
            myNum: 205
---------------iteration 5--------------

            original parameter: 1
            myNum: 8

            original parameter: 100
            myNum: 206



*/