function Cat() {
    //private property - can be used only inside this function
    let color="red";

    this.age = 100;
    this.sayHello=()=>{console.log("hello "+color)}
}

let c=new Cat();

console.log(c.age);
console.log(c.color);
c.sayHello();