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


let add7 = (number) => number+7;
console.log(add7(10))

let multiply = (num1,num2)=> num1*num2;
console.log(multiply(1,2));


let flag = false
let check = (char) =>{
    if(char.toLowerCase()===char.toUpperCase()){
        return false;
    }
    else{
        return true;
    }
}
let capitalize = (str) =>{
    for(let i = 0;i<str.length;i++){
        let char = str[i];
        flag = check(char)
        if(flag==false){
            return "Not a complete string"
        }
    }
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

console.log(capitalize("hello"));


let lastLetter = (str) =>{
    return str.charAt(str.length-1);
}
console.log(lastLetter("Hello"))