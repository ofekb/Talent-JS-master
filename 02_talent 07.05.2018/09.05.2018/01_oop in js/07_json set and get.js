

let obj = {

    _x:2,
    get x() {
        return this._x;
    },
    set x(val) {
        this._x=val?val:100; 
    }
}


console.log(obj.x);  //2

obj.x=7;

console.log(obj.x);  //7

obj.x=0;

console.log(obj.x);  //100