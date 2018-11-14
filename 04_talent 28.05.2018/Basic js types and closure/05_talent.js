let sym1=Symbol();  // without new !!
let sym2=Symbol();


console.log("sym1",sym1);
console.log("sym2",sym2);

console.log("sym2===sym1", sym2===sym1);  

let sym3=Symbol("myFlag");  // without new !!
let sym4=Symbol("myFlag");


console.log("sym3",sym3);
console.log("sym4",sym4);

console.log("sym3===sym4", sym3===sym4); 

let student1={
    "firstName":"Yoni",
    toString(){
        return `my name is ${this.firstName}`;
    }
}
console.log(student1); 
console.log("student1 says: "+student1); 
student1["lastName"]="Zilber";
console.log(student1); 

student1["firstName"]="Alex";  //override the prev value 
console.log(student1); 


let secureKey=Symbol("firstName");
let student2={
    [secureKey]:"Omri",
    [Symbol("firstName")]:"Igal"
}
console.log(student2); 
console.log("student2 says: "+student2); 
console.log("student2 says: "+student2.toString()); 

student2[Symbol("firstName")]="Shay";
console.log(student2);
console.log(student2[secureKey]);  

student2[secureKey]="JB";
console.log(student2);


let num=3;
console.log("num is "+num);

let symb=Symbol();
//console.log("symb is "+symb); //--> RUNTIME ERROR: Cannot convert a Symbol value to a string at Object
console.log("symb is "+symb.toString());