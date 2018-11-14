/*
     A Promise is in one of these states:
             1. pending: initial state, neither fulfilled nor rejected.
             2. fulfilled: meaning that the operation completed successfully.  (then)
             3. rejected: meaning that the operation failed.  (catch)
*/
function promiseMulNum(x) {
    return new Promise(function (resolve, reject) {
        console.log("promise got " + x);
        (x > 0) ? resolve(x * x) : reject("error");
    });
}

let resolveAction = (msg) => { console.log("resolve msg", msg); };
let rejectAction = (msg) => { console.log("reject msg", msg); };

console.log("before ------------");

promiseMulNum(10)
    .catch(rejectAction)
    .then(resolveAction);

promiseMulNum(0)
    .then(resolveAction)
    .catch(rejectAction);

console.log("after ------------");


/*


OUTPUT:
_______________________
before ------------
promise got 10
promise got 0
after ------------
resolve msg 100
reject msg error

*/