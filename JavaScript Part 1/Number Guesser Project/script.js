let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => { return Math.floor(Math.random() * 10); };
console.log(generateTarget());

const compareGuesses = (userGuess, computerGuess, secretTarget) => {
    if (userGuess === computerGuess) {
        return true;
    }

    if (secretTarget > userGuess && secretTarget > computerGuess) {
        if (userGuess > computerGuess) {
            return true;
        } else {
            return false;
        };
    } else if (secretTarget < userGuess && secretTarget < computerGuess) {
        if (userGuess < computerGuess) {
            return true;
        } else {
            return false;
        };
    } else if (secretTarget < userGuess && secretTarget < computerGuess)
};