
/*
arrow function:
(_parameters_) => { _function's body_ }

------------------------------

arrow function rules:
1) if we get only one parameter to the function - we can remove the ()
2) if we have in the function only one command - that returnes a value - we can remove the {return }
______________________________

annonymous function:
function (_parameters_) { _function's body_ }

*/ 


let f1=(num)=>{console.log("f1 got num",num)};

let f2=num=>{console.log("f2 got num",num)};  //--> rule num. 1



let f3=(num)=>{return num*2};

let f4=(num)=>num*2; //--> rule num. 2

let f5=num=>num*2; //--> rule num. 1 + rule num. 2


f1(2);
f2(2);
console.log("f3(2)",f3(2));
console.log("f4(2)",f4(2));
console.log("f5(2)",f5(2));



/*

OUTPUT:
_____________

f1 got num 2
f2 got num 2
f3(2) 4
f4(2) 4
f5(2) 4

*/



