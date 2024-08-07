let userWin = 0;
let robotWin = 0;
let message = '';

const symbols = document.querySelectorAll(".sign");
const choices = ["rock", "paper", "scissors"];
const messageBox = document.querySelector('.message');
const userWinScore = document.getElementById('user-win');
const robotWinScore = document.getElementById('robot-win');

function getWinner(userResult){
    //get winner
    if(userResult){
        message = 'User Win! 🙍🏻‍♂️'
        userWin +=1;
        userWinScore.innerText = userWin;
    } else {
        message = 'Robot Win! 🤖'
        robotWin +=1;
        robotWinScore.innerText = robotWin;
    }

    messageBox.innerHTML= message;
}

function robotTurn(userChoice){
    const choiceIndex = Math.floor(Math.random()*3);
    const robotChoice = choices[choiceIndex];
    //message = 'Robot Win! 🤖'
    //message = 'User Win! 🙍🏻‍♂️'
    if(userChoice === robotChoice){
        message = 'Match Draw! Play Again ↻'
        messageBox.innerHTML= message;
    } else {
        let userResult = false;
        if(userChoice === "rock"){
            userResult = robotChoice == "paper" ? false : true;
        } else if(userChoice === "paper"){
            userResult = robotChoice == "scissors" ? false : true;
        } else{
            userResult = robotChoice == "rock" ? false : true;
        }
        getWinner(userResult);
    }
}

symbols.forEach((event) => {
    event.addEventListener("click", function(){
        const userChoice = this.getAttribute("data-sign");
        robotTurn(userChoice);
    }) 
})