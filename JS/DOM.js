let h1 = document.querySelector('h1')
h1.innerHTML = "Hello Guyz"
h1.style.backgroundColor = "Blue"

h1.addEventListener('click',()=>{
    // alert("Your clicked hello guyz")
    h1.innerHTML = "Changed"
})
h1.addEventListener('dblclick',()=>{
    alert("Your clicked hello guyz")
})