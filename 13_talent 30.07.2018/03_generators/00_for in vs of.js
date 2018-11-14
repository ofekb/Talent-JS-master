let arr = ["A", "B", "C"];
let obj = { "name": "Bob", "age": 23 };


console.log("-----------------for in (arr)------------------")
for (x in arr)
    console.log(x);

console.log("-----------------for of (arr)------------------")
for (x of arr)
    console.log(x);


    
console.log("-----------------for in (obj)------------------")
for (x in obj)
    console.log(x);

console.log("-----------------for of (obj)------------------")
for (x of obj)
    console.log(x);


    /*
    OUTPUT:
    ______________________________

-----------------for in (arr)------------------
0
1
2
-----------------for of (arr)------------------
A
B
C
-----------------for in (obj)------------------
name
age
-----------------for of (obj)------------------
C:\Users\jbt\Documents\GitHub\Talent-JS\13_talent 30.07.2018\03_generators\00_for in vs of.js:20
for (x of obj)
          ^

TypeError: obj is not iterable
    
    */