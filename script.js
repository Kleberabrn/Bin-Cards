// Valores fixos nas cartas, na ordem definida
const valores = [1, 2, 4, 8, 16];

// Guarda quais cartas estão viradas
let viradas = [false, false, false, false, false];

function sortear() {
    // Sorteia frente/verso — cada carta com chance 50%
    viradas = viradas.map(() => Math.random() < 0.5);

    // Atualiza a exibição das cartas
    for (let i = 0; i < 5; i++) {
        const card = document.getElementById("card" + (i + 1));
        card.textContent = viradas[i] ? valores[i] : "?";
    }

    document.getElementById("resultado").textContent = "";
}

function verificar() {
    const entrada = parseInt(document.getElementById("sum-input").value);

    // Soma correta das cartas viradas
    const somaCorreta = valores
        .filter((v, i) => viradas[i])
        .reduce((acc, val) => acc + val, 0);

    if (entrada === somaCorreta) {
        document.getElementById("resultado").textContent = "Correto!";
    } else {
        document.getElementById("resultado").textContent =
            "Incorreto! Soma correta: " + somaCorreta;
    }
}
