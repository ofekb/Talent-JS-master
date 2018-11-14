/*
key: string
value: any type
*/
var obj = {
    "age": 20,
    "name": "Bob",
    "isMale": true,
    "address": ["Tel-Aviv", "Israel"],

    "family-members": {
        "father": "John",
        "mather": "Alice"
    },

    "sayHello1": () => { console.log(`sayHello1 ${this.name}`) },

    "sayHello2": function(){ console.log(`sayHello2 ${this.name}`) },

    "toString": function(){ return `${this.name} is ${this.age} years old` }
};

for (let x in obj) {
    if (typeof (obj[x]) == "function")
        obj[x]();
    else
        console.log(x, obj[x])
}
console.log("After loop")
console.log(obj.toString())


/*

output:
__________________________

age 20
name Bob
isMale true
address [ 'Tel-Aviv', 'Israel' ]
family-members { father: 'John', mather: 'Alice' }
sayHello1 undefined
sayHello2 Bob
After loop
Bob is 20 years old
*/