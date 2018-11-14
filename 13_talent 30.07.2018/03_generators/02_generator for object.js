
let obj = { "name": "Bob", "age": 23 };

function *f1() {
    for (x in obj)
        yield obj[x];
}




let res = f1();  // res is `IterableIterator<any>`
for (x of res)
    console.log(x);



/*
    OUTPUT:
    ______________________________
Bob
23

*/