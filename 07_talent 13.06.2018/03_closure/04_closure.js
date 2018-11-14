


function outer(){
    let callTime=Date.now();


    return()=>{
        console.log(`call time to this gunction is: ${callTime}`);
    }
}

let f1,f2;


    setTimeout(
        ()=>{
            f1=outer();
            f1();
        } 
        ,1000
    )


    setTimeout(
        ()=>{
            f2=outer();
            f2();
        } 
        ,5000
    )


    setTimeout(
        ()=>{
            f1();
            f2();
        } 
        ,10000
    )


/*

OUTPUT:
____________________________________________

call time to this gunction is: 1528892731490
call time to this gunction is: 1528892735484
call time to this gunction is: 1528892731490
call time to this gunction is: 1528892735484

*/