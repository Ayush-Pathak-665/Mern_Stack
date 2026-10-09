var a = 10;
var a = 20;
// This is var which can be redefine redeclare

let b = 10;
// let b = 20;//will give error
b = 20;

const c = 10;
// c = 20;//will give error;
console.log(c);
let d;
console.table([a,b,c,d])