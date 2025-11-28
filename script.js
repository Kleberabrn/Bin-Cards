const cardValues = [16, 8, 4, 2, 1];
let currentValues = [...cardValues];
let flipped = [false, false, false, false, false];

function shuffleCards() {
    // Embaralha quais cartas estão viradas (mantendo valores fixos)
    flipped = flipped.map(() => Math.random() < 0.5);
    
    for (let i = 0; i < 5; i++) {
        const card = document.getElementById("card" + (i+1));
        const binary = document.getElementById("binary" + (i+1));
        
        if (flipped[i]) {
            card.textContent = currentValues[i];
            binary.textContent = "1";
        } else {
            card.textContent = "?";
            binary.textContent = "0";
        }
    }
}

function flipCard(i) {
    const card = document.getElementById("card" + i);
    const binary = document.getElementById("binary" + i);
    
    flipped[i-1] = !flipped[i-1];
    
    if (flipped[i-1]) {
        card.textContent = currentValues[i-1];
        binary.textContent = "1";
    } else {
        card.textContent = "?";
        binary.textContent = "0";
    }
}

function checkSum() {
    const user = parseInt(document.getElementById("sum-input").value);
    const realSum = currentValues
        .filter((v, i) => flipped[i])
        .reduce((a, b) => a + b, 0);

    if (user === realSum) {
        document.getElementById("result").textContent = "Correto!";
    } else {
        document.getElementById("result").textContent = "Incorreto. A soma correta é: " + realSum;
    }
}

// Inicializa o jogo
window.onload = shuffleCards;
