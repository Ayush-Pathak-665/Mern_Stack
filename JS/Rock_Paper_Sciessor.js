let getcomputerInput = () =>{
    let choice = Math.random()
    if(choice<0.33){
        return "Rock"
    }
    else if(choice>0.67){
        return "Paper"
    }
    else{
        return "Sciessor"
    }
}
let Listner = document.querySelectorAll('button');
let computerScore = 0
let userScore = 0
Listner.forEach((button)=>{button.addEventListener('click',()=>{
    let computerInput = getcomputerInput()
    let input = button.innerHTML.toUpperCase();
    computerInput = computerInput.toUpperCase();
    if(computerScore==5 || userScore ==5){
        if(computerScore==5)
            document.querySelector('.winner span').innerHTML = "Computer"
        else
            document.querySelector('.winner span').innerHTML = "User"
    }
    else if(input==="ROCK" && computerInput==="PAPER"){
        computerScore++
        document.querySelector('.computerscore span').innerHTML = computerScore
    }
    else if(input==="SCIESSOR" && computerInput==="ROCK"){
        computerScore++
        document.querySelector('.computerscore span').innerHTML = computerScore
    }
    else if(input==="PAPER" && computerInput==="SCIESSOR"){
        computerScore++
        document.querySelector('.computerscore span').innerHTML = computerScore
    }
    else{
        userScore++;
        document.querySelector('.humanscore span').innerHTML = userScore
    }
})})
