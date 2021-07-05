/* 
|-Conseguir un numero aleatorio
|-3 casos distintos para ese numero(Piedra, papel tijera)
-Comparar casos
    Roca>Tijera
    Tijera>Papel
    Papel>Roca
-Decidir ganador
*/
const buttons = document.querySelectorAll(`button`);
const div = document.querySelector('.results');
const scorediv = document.querySelector(`.score`);
const computer= document.createElement('h3');
const player= document.createElement('h3');
scorediv.appendChild(computer);
scorediv.appendChild(player);
let playerscore = 0;
let computerscore = 0;
buttons.forEach(e => {
    e.addEventListener(`click`, ()=>{
        let result = playRound(e.className)
        checkResultUpdateScore(result);
    });
});
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
function playRound(playerSelection, computerSelection=computerPlay()){
    playerselection = playerSelection.toLowerCase()
    div.removeChild(div.childNodes[0]);
    const result = document.createElement(`p`);
    if (playerSelection == computerSelection){
        result.textContent=`Its a tie ${playerSelection} its the same as ${computerSelection}`;
        div.appendChild(result);
        return(`tie`)
    }else if (playerSelection == "rock" && computerSelection == "scissors"){
        result.textContent=`You win ${playerSelection} beats ${computerSelection}`;
        div.appendChild(result);
        return(`playerwon`)
    }else if (playerSelection == "scissors" && computerSelection=="paper"){
        result.textContent=`You win ${playerSelection} beats ${computerSelection}`;
        div.appendChild(result);
        return(`playerwon`)
    }else if(playerSelection=="paper"&&computerSelection=="rock"){
        result.textContent=`You win ${playerSelection} beats ${computerSelection}`;
        div.appendChild(result);
        return(`playerwon`)
    }else{
        result.textContent=`You lose ${computerSelection} beats ${playerSelection}`;
        div.appendChild(result);
        return(`playerlost`)
    }
}
function checkWin(){
    if (playerscore >= 5){
        console.log(`Player won`);
        if (confirm(`You won!!!!! Wanna play again?`)){
            playerscore = 0;
            computerscore = 0;
            player.textContent = `Player won ${playerscore}`;
            computer.textContent = `Computer won ${computerscore}`;
        }else{
            return 0;
        }
    }else if(computerscore >=5){
        console.log(`Computer won`);
        if (confirm(`The computer won. Wanna play again?`)){
            playerscore = 0;
            computerscore = 0;
            player.textContent = `Player won ${playerscore}`;
            computer.textContent = `Computer won ${computerscore}`;
        }else{
            return 0;
        }
    }
}
function checkResultUpdateScore(r){
    switch (r) {
        case 'playerwon':
            playerscore++;
            break;
        case 'playerlost':
            computerscore++;
            break;
        case 'tie':
            break;
        default:
            break;
    }
    player.textContent = `Player won ${playerscore}`;
    computer.textContent = `Computer won ${computerscore}`;
    checkWin()
}