function outer(num) {
    let myNum = num * 2;

    return () => { console.log(`
            original parameter: ${num}
            myNum: ${++myNum}`); 
        }
}

let firstCall=outer(1);
let secondCall=outer(100);

 firstCall();
 secondCall();

