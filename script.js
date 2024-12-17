// Jogo de Adivinhação
const randomNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
    const userGuess = document.getElementById("guess").value;
    const feedback = document.getElementById("feedback");

    if (userGuess == randomNumber) {
        feedback.textContent = "Parabéns! Você acertou o número!";
        feedback.style.color = "green";
    } else if (userGuess > randomNumber) {
        feedback.textContent = "Muito alto! Tente novamente.";
        feedback.style.color = "orange";
    } else {
        feedback.textContent = "Muito baixo! Tente novamente.";
        feedback.style.color = "orange";
    }
}

// Gerar Frases Motivacionais
const motivationPhrases = [
    "Nunca desista dos seus sonhos!",
    "A prática leva à perfeição.",
    "Você é mais capaz do que imagina.",
    "Cada linha de código é um passo em direção ao sucesso.",
    "Acredite em si mesmo e vá em frente!"
];

function generateMotivation() {
    const randomIndex = Math.floor(Math.random() * motivationPhrases.length);
    document.getElementById("motivation-output").textContent = motivationPhrases[randomIndex];
}

// Contador de Cliques
let clickCount = 0;

function countClicks() {
    clickCount++;
    document.getElementById("click-count").textContent = clickCount;
}
// Lógica do Quiz
function submitQuiz() {
    let score = 0;

    // Respostas corretas
    const answers = {
        q1: "CSS",
        q2: "console.log()",
        q3: "Hyper Text Markup Language"
    };

    // Pegando respostas do usuário
    const userAnswer1 = document.querySelector('input[name="q1"]:checked');
    const userAnswer2 = document.querySelector('input[name="q2"]:checked');
    const userAnswer3 = document.querySelector('input[name="q3"]:checked');

    // Verificação das respostas
    if (userAnswer1 && userAnswer1.value === answers.q1) score++;
    if (userAnswer2 && userAnswer2.value === answers.q2) score++;
    if (userAnswer3 && userAnswer3.value === answers.q3) score++;

    // Feedback de desempenho
    const feedback = document.getElementById("quiz-feedback");

    if (score === 3) {
        feedback.textContent = "Parabéns! Você acertou todas as perguntas! 🚀";
        feedback.style.color = "green";
    } else if (score === 2) {
        feedback.textContent = "Muito bom! Você acertou 2 de 3 perguntas!";
        feedback.style.color = "orange";
    } else if (score === 1) {
        feedback.textContent = "Você acertou 1 de 3. Continue estudando! 💡";
        feedback.style.color = "orange";
    } else {
        feedback.textContent = "Você não acertou nenhuma... Tente novamente! 💻";
        feedback.style.color = "red";
    }
}
// Gerador de Piadas Aleatórias com Explicação
const jokes = [
    {
        joke: "Por que o livro de história estava sempre cansado? Porque ele tinha muitos capítulos para carregar!",
        
        explanation: "A piada brinca com o fato de que livros de história têm muitos capítulos (seções), e 'carregar capítulos' soa como um peso físico."
    },
    {
        joke: "O que o professor de história disse quando eu dormi na aula? 'Você não precisa viajar no tempo, já estamos falando sobre o passado!'",
        
        explanation: "Aqui, a piada faz um trocadilho com 'viajar no tempo', relacionando o sono do aluno com a aula de história, que é sobre o passado."
    },
    {
        joke: "Por que o sociólogo não conta segredos? Porque ele sabe que as estruturas sociais não guardam nada para si!",
        
        explanation: "Essa piada usa o conceito de 'estruturas sociais' da sociologia, sugerindo que elas revelam informações em vez de escondê-las."
    },
    {
        joke: "Qual a matéria preferida de um sociólogo na cozinha? A panela... de pressão social!",
        
        explanation: "A piada é um trocadilho com 'panela de pressão' e o conceito de 'pressão social', estudado em sociologia."
    },
    {
        joke: "Por que os mapas são péssimos em guardar segredos? Porque eles sempre deixam tudo às claras!",
        
        explanation: "Essa brincadeira faz referência aos mapas geográficos, que mostram informações visíveis e claras sobre os territórios."
    },
    {
        joke: "O que um país disse ao outro durante uma crise? 'Calma, eu tô só em recessão, não em guerra!'",
        
        explanation: "A piada faz referência aos problemas econômicos (recessão) e conflitos geopolíticos (guerra) entre países."
    },
    {
        joke: "Por que o cientista levou uma escada para o laboratório? Para levar sua pesquisa a um novo nível!",
        
        explanation: "Aqui, há um trocadilho com 'novo nível', referindo-se tanto a progresso científico quanto ao uso literal de uma escada."
    },
    {
        joke: "Se iniciação científica é para começar, quando é que a gente termina de fazer pesquisa? Nunca, ciência é infinita!",
        
        explanation: "Essa piada reflete a natureza contínua da ciência, onde sempre há novas descobertas e pesquisas a serem feitas."
    }
];

function generateJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    const selectedJoke = jokes[randomIndex];

    document.getElementById("joke-output").innerHTML = `
        <strong>Piada:</strong> ${selectedJoke.joke} <br>
        <em>Explicação:</em> ${selectedJoke.explanation}
    `;
}