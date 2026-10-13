obj = {
    name:"Ayush",
    Course:"MCA"
}

console.log(obj.name)

let obj1 = {
    name:"Ayush",
    Course:"MCA",
    greet:function() {
        return "Good Morning"
    }
}

console.log(obj1.greet())



let obj2 = [
    {name:"Ayush",course:"MCA"},
    {name:"Ansh",course:"MCA"},
    {name:"Pankaj",course:"MCA"}
]

console.log(obj2[0].name)
console.log(obj2[1].course)