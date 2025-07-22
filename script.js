let playerScore = 0;
let computerScore = 0;

const choices = ['rock', 'paper', 'scissors'];
const emojis = { rock: '🪨', paper: '📄', scissors: '✂️' };

function play(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
    document.getElementById('playerChoice').textContent = emojis[playerChoice];
    document.getElementById('computerChoice').textContent = emojis[computerChoice];
    
    const result = getResult(playerChoice, computerChoice);
    
    if (result === 'win') {
        playerScore++;
        document.getElementById('result').textContent = '你贏了！';
        document.getElementById('result').className = 'text-xl font-bold mb-4 h-6 text-green-600';
    } else if (result === 'lose') {
        computerScore++;
        document.getElementById('result').textContent = '你輸了！';
        document.getElementById('result').className = 'text-xl font-bold mb-4 h-6 text-red-600';
    } else {
        document.getElementById('result').textContent = '平手！';
        document.getElementById('result').className = 'text-xl font-bold mb-4 h-6 text-gray-600';
    }
    
    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('computerScore').textContent = computerScore;
}

function getResult(player, computer) {
    if (player === computer) return 'tie';
    if ((player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')) {
        return 'win';
    }
    return 'lose';
}