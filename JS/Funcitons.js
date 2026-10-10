function print(){
    console.log("hello");
}

print();

let a = function(){
    console.log("Hello");
    return 10;
}
a();

const b = () =>{
    let a1 = 10;
    let b1 = 20;
    return a1+b1;
}
console.log(b())


let c = (a,b) => a+b;
console.log(c(10,"Hello"))