let obj1 = {
    get color() {
        return "red"
    },
    age: 100,
    __proto: "cat"
};

let obj2 = Object.create(obj1);
obj2.name="Assaf";

console.log("obj1", obj1);

console.log("obj2", obj2.age);
console.log("obj2", obj2.color);

console.log(Object.getOwnPropertyNames(obj1));  //[ 'color', 'age', '__proto' ]
console.log(Object.getOwnPropertyNames(obj2));  // [ 'name' ]


// { value: 'Assaf',writable: true, enumerable: true, configurable: true }
console.log(Object.getOwnPropertyDescriptor(obj2,"name")); 

Object.defineProperty(obj2,
    "literOfMilk",
    { value: 20, writable: false, enumerable: false, configurable: true });  


console.log(Object.getOwnPropertyDescriptor(obj2,"literOfMilk"));

obj2.literOfMilk=45;
console.log(obj2.literOfMilk); //20

console.log(obj2.literOfMilk); //20

console.log(JSON.stringify(obj2));  //{"name":"Assaf"}

obj1.age=44;

console.log(Object.getPrototypeOf(obj2));



console.log(Object.isSealed(obj2)); //false


//prevents the addition of new properties.
Object.seal(obj2); 

console.log(obj2);
obj2.name="Shimon";
obj2.lastName="Aviv";
console.log(obj2);


Object.
console.log(Object.isSealed(obj2));


//Prevents the modification of existing property attributes and values, 
//and prevents the addition of new properties.

Object.freeze(obj2); //false
console.log(obj2);
obj2.name="Julian";
obj2.lastName="Aviv";
console.log(obj2);



