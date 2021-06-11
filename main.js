/* 
|-Conseguir un numero aleatorio
|-3 casos distintos para ese numero(Piedra, papel tijera)
-Comparar casos
    Roca>Tijera
    Tijera>Papel
    Papel>Roca
-Decidir ganador
*/
function computerPlay(){
    let rnumber=Math.floor(Math.random()*100)%3
    switch (rnumber) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break
        default:
            break;
    }
}
function oneRound(playerSelection, computerSelection=computerPlay()){
    playerselection = playerSelection.toLowerCase()
    if (playerSelection == computerSelection){
        console.log(`Its a tie ${playerSelection} its the same as ${computerSelection}`)
        return(`tie`)
    }else if (playerSelection == "rock" && computerSelection == "scissors"){
        console.log(`You win ${playerSelection} beats ${computerSelection}`)
        return(`playerwon`)
    }else if (playerSelection == "scissors" && computerSelection=="paper"){
        console.log(`You win ${playerSelection} beats ${computerSelection}`)
        return(`playerwon`)
    }else if(playerSelection=="paper"&&computerSelection=="rock"){
        console.log(`You win ${playerSelection} beats ${computerSelection}`)
        return(`playerwon`)
    }else{
        console.log(`You lose ${computerSelection} beats ${playerSelection}`)
        return(`playerlost`)
    }
}
function game(){
    let scorePlayer=0;
    let scoreComputer=0;
    for (let i = 0; i < 5; i++) {
        let result=oneRound(prompt(`Choose your weapon`));
        switch (result) {
            case `playerwon`:
                scorePlayer++
                break;
            case `playerlost`:
                scoreComputer++;
            default:
                break;
        }
    }
    scorePlayer>scoreComputer?console.log(`Player won`):console.log(`Computer won`)
}
game()