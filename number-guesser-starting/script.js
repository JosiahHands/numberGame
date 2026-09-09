let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
generateTarget = () => {
    return Math.floor(Math.random()*9)+1;
}

compareGuesses = (you, bot, tgt) => {
    const youC = Math.abs(you - tgt)
    const botC = Math.abs(bot - tgt)
    if (youC < botC) {
        return true
    } else if (youC === botC) {
        return true
    } 
    return false
}

updateScore = (str) => {
    if (str === 'human') {
        humanScore += 1
    } else if (str === 'computer') {
        computerScore += 1
    }
}

advanceRound = () => {
    currentRoundNumber = 1 + (humanScore + computerScore);
}

