console.log("Hello")

let getComputerchoice = () =>{
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

let gethumanchoice = () =>{
    return prompt("Enter your choice -: ")
}

let humanScore = 0, computerScore = 0

let PlayRound = (humanchoice, Computerchoice) =>{
    humanchoice = humanchoice.toUpperCase();
    Computerchoice = Computerchoice.toUpperCase();
    if(humanchoice==="ROCK" && Computerchoice==="PAPER"){
        return "Computer Wins"
        computerScore++
    }
    else if(humanchoice==="SCIESSOR" && Computerchoice==="ROCK"){
        return "Computer Wins"
        computerScore++
    }
    else if(humanchoice==="PAPER" && Computerchoice==="SCIESSOR"){
        return "Computer Wins"
        computerScore++
    }
    else{
        return "Human Wins"
        humanScore++;
    }
}

alert(PlayRound(gethumanchoice(),getComputerchoice()))
alert(PlayRound(gethumanchoice(),getComputerchoice()))
alert(PlayRound(gethumanchoice(),getComputerchoice()))
alert(PlayRound(gethumanchoice(),getComputerchoice()))
alert(PlayRound(gethumanchoice(),getComputerchoice()))
