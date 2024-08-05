//Project: Rock, Paper, Scissors

var getUserChoice = function (userInput) {
    var userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'rock') {
         return userInput;
    } else {console.log('Invalid input!')}
};

var getComputerChoice = function () {
    var computerChoice = Math.floor(Math.random() * 3)
    if (computerChoice === 0) {
        return 'rock';
    } else if (computerChoice === 1) {
        return 'paper';
    } else if (computerChoice === 2) {
        return 'scissors';
    }

};

var determineWinner = function (userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'Draw';
    } 
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Computer wins!'
        } else {
            return 'User wins!'
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Computer wins!'
        } else {
            return 'User Wins!'
        }
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Computer wins!'
        } else {
            return 'User wins!'
        }
    }
}

var playGame = function () {
    var userChoice = getUserChoice('rock');
    console.log(userChoice);
    var computerChoice = getComputerChoice();
    console.log(computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}

playGame();
