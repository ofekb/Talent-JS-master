const student={};   //the pointer is const - can not be changed

student.name="Shimon";   //we can change the object's content

//student={name:"Aviv"};  // !!! TypeError: Assignment to constant variable.

console.log(student.toString());  //[object Object]

console.log(student);   //{ name: 'Shimon' }
