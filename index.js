// Function to determine the winner
function determineWinner(user, machine) {
    if (user === machine) {
        return 'tie';
    }
    if (
        (user === 0 && machine === 2) ||  // Rock beats Scissors
        (user === 1 && machine === 0) ||  // Paper beats Rock
        (user === 2 && machine === 1)     // Scissors beats Paper
    ) {
        return 'user';
    }
    return 'machine';
}

// Function to generate the machine's move
function playMachine() {
    const options = [0, 1, 2]; // 0: Rock, 1: Paper, 2: Scissors
    const index = Math.floor(Math.random() * options.length);
    return options[index];
}

// Main game function
function playRockPaperScissors() {
    let times = parseInt(prompt('How many times would you like to play?:'), 10);
    if (isNaN(times) || times <= 0) {
        alert('Please enter a valid number greater than zero.');
        return;
    }

    for (let i = 0; i < times; i++) {
        let userMove = parseInt(prompt('Choose your move: 0 for Rock, 1 for Paper, 2 for Scissors:'), 10);
        while (![0, 1, 2].includes(userMove)) {
            userMove = parseInt(prompt('Invalid option. Choose between 0 for Rock, 1 for Paper, 2 for Scissors:'), 10);
        }

        const machineMove = playMachine();
        const result = determineWinner(userMove, machineMove);

        const moves = ['Rock', 'Paper', 'Scissors'];
        alert(`Your move: ${moves[userMove]}\nMachine's move: ${moves[machineMove]}\nResult: ${result === 'tie' ? 'It\'s a tie!' : result === 'user' ? 'Congratulations, you won!' : 'Sorry, you lost.'}`);
    }
}

// Execute the game
playRockPaperScissors();
