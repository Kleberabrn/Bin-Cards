const cardValues = [1, 2, 4, 8, 16];
let currentValues = [];
let flipped = [false, false, false, false, false];

function shuffleCards() {
    currentValues = [...cardValues].sort(() => Math.random() - 0.5);
    flipped = [false, false, false, false, false];

    for (let i = 0; i < 5; i++) {
        const card = document.getElementById("card" + (i+1));
        card.textContent = "?";
    }
}

function flipCard(i) {
    const card = document.getElementById("card" + i);

    if (flipped[i-1]) {
        card.textContent = "?";
        flipped[i-1] = false;
    } else {
        card.textContent = currentValues[i-1];
        flipped[i-1] = true;
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
