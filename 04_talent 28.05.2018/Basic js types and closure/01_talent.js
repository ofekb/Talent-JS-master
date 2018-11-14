const f=console.log;

var a=1;
f(typeof(a)); //--> "number"
f(typeof(typeof(a)))  //-->"string"
f(typeof(a)==="number");  //--> true



var b={};
f(typeof(b)); //--> "object"
f(typeof(typeof(b)))  //-->"string"
f(typeof(b)==="object");  //--> true

//pitfall : c return true to `(typeof(c)==="object")` but is not an object
var c=null;
f(typeof(c)); //--> "object"
f(typeof(typeof(c)))  //-->"string"
f(typeof(c)==="object");  //--> true



//pitfall : c return true to `(typeof(c)==="object")` but is not an object
var d=null;
f(typeof(d)); //--> "object"
f(typeof(typeof(d)))  //-->"string"
f((d)?typeof(d)==="object": "is null");  //--> is null
