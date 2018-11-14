

function func(){
    console.log(Date.now());
}



setTimeout(function () {
    console.log(Date.now());
}, 1000);

setTimeout(()=>{ console.log(Date.now());}, 2000);

setTimeout(func, 3000);


/*
OUTPUT:
___________

1529258573735
1529258574682
1529258575686

*/