function descobrirMais() {
    let nome = prompt("Qual é o seu nome?");
    if (nome) {
        const curiosidades = [
            "São Petersburgo possui mais de 300 pontes e é conhecida como a 'Veneza do Norte'.",
            "O Museu Hermitage, em São Petersburgo, tem mais de 3 milhões de obras de arte e artefatos."
        ];

        const curiosidadeAleatoria = curiosidades[Math.floor(Math.random() * curiosidades.length)];
        alert("Olá, " + nome + "! Você sabia que " + curiosidadeAleatoria);
    } else {
        alert("Tudo bem! São Petersburgo continua sendo incrível! Venha conhecer!");
    }
}
