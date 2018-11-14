function *f1(){
    yield "A";
    yield "B";
    yield "C";
}




let res=f1();  // res is `IterableIterator<"A" | "B" | "C">`
for (x of res)
    console.log(x);


    
/*
    OUTPUT:
    ______________________________
        A
        B
        C

*/