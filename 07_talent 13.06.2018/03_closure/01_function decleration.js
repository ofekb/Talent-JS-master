

let f = function innerF(num) {
    if (num)
        console.log("num is: " + num)
    else
        //only inside the function we can call the function directly with the "innerF" name
        innerF(Math.random());  

}


//innerF(4);  //--> ReferenceError: innerF is not defined

f(3);

f(0);


/*
output:
______________________________
num is: 3
num is: 0.3065063942573447
*/