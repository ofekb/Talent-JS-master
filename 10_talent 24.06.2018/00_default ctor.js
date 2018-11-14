class A {
    // propA = "dif0";  --> RUNTIME ERROR
    constructor() {
        console.log("ctor A");
    }
}

class B extends A{}

class C extends A{
    constructor(){
        super();
    }
}

let obj=new C();