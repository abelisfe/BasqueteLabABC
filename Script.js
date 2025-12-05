// ============================================================
//  BasqueteLabABC — Script Principal
//  Organização: Dados dos jogos • Carregamento • Acessibilidade
// ============================================================

console.log("BasqueteLabABC: JavaScript carregado.");


// ============================================================
// 1. Função simples (página Contactos)
// ============================================================
function enviarMensagem() {
    alert("Mensagem enviada com sucesso! (simulação)");
}

function validarCampo(idCampo, idErro) {
    const campo = document.getElementById(idCampo);
    const erro = document.getElementById(idErro);

    campo.addEventListener("input", () => {
        if (campo.value.trim().length < 3) {
            erro.classList.remove("d-none");
            campo.classList.add("is-invalid");
        } else {
            erro.classList.add("d-none");
            campo.classList.remove("is-invalid");
        }
    });
}

function validarNome() {
    const campo = document.getElementById("nome");
    const erro = document.getElementById("erro-nome");

    campo.addEventListener("input", () => {

        const valor = campo.value.trim();

        // Expressão regular: permite apenas letras + espaços + acentos
        const apenasLetras = /^[A-Za-zÀ-ÿ\s]+$/;

        if (valor.length < 3 || !apenasLetras.test(valor)) {
            erro.classList.remove("d-none");
            campo.classList.add("is-invalid");
        } else {
            erro.classList.add("d-none");
            campo.classList.remove("is-invalid");
        }
    });
}

// Ativar validação
if (document.getElementById("nome")) {
    validarNome();
}

if (document.getElementById("assunto")) {
    validarCampo("assunto", "erro-assunto");
}

if (document.getElementById("mensagem")) {
    validarCampo("mensagem", "erro-mensagem");
}
// ============================================================
// 2. Base de Dados — Jogos (jogos.js)
// ============================================================
const jogos = {
    3: {
        titulo: "ABC 82 – 74 Touros",
        pontos: 82,
        lancamentos: "47%",
        triplos: "31%",
        ressaltos: 41,
        assistencias: 18,
        blocos: 4,
        analise:
            "O ABC entrou em campo com grande intensidade defensiva e isso ficou evidente no controlo dos ressaltos, terminando o jogo com 41, número que limitou significativamente as segundas oportunidades dos Touros. No ataque, apesar da eficácia nos lançamentos não ter sido extraordinária (47%), a equipa compensou com boa circulação de bola e movimentações eficientes sem posse, criando vários tiros de média distância em posições confortáveis. A percentagem de triplos situou-se nos 31%, mostrando alguma irregularidade no perímetro, mas os 18 assistências e os 4 blocos revelam uma equipa equilibrada nos dois lados do campo. No geral, o ABC conseguiu impor o ritmo do jogo e controlar os momentos decisivos, garantindo uma vitória sólida por oito pontos."
    },

    7: {
        titulo: "ABC 69 – 77 Pedras",
        pontos: 69,
        lancamentos: "42%",
        triplos: "27%",
        ressaltos: 35,
        assistencias: 14,
        blocos: 2,
        analise:
            "O ABC apresentou dificuldades claras no ataque organizado, refletidas na baixa eficácia geral de lançamento (42%) e sobretudo nos triplos, onde a equipa ficou apenas pelos 27%. A produção ofensiva foi irregular e as 14 assistências revelam uma circulação de bola menos eficiente do que o habitual. Defensivamente, a equipa teve dificuldade em controlar o jogo interior, permitindo ao Pedras várias segundas oportunidades devido a falhas de posicionamento nos ressaltos. Os apenas 2 blocos mostram pouca presença na proteção do aro, o que contribuiu para a desvantagem final."
    },

    9: {
        titulo: "ABC 87 – 85 Pedras",
        pontos: 87,
        lancamentos: "53%",
        triplos: "29%",
        ressaltos: 38,
        assistencias: 20,
        blocos: 3,
        analise:
            "O encontro entre o ABC e o Pedras terminou com uma vitória sofrida por apenas dois pontos, refletindo um jogo equilibrado e decidido nos detalhes finais. A equipa mostrou boa capacidade de criação ofensiva, destacando-se as 20 assistências que garantiram fluidez no ataque. Apesar da eficácia exterior ter ficado aquém do esperado (29%), o ABC esteve sólido nos ressaltos e demonstrou resiliência para fechar o jogo nos momentos decisivos."
    },

    // Jogos futuros
    12: { titulo: "Touros vs ABC (Agendado)", pontos: "-", lancamentos: "-", triplos: "-", ressaltos: "-", assistencias: "-", blocos: "-", analise: "O jogo ainda não foi jogado." },
    15: { titulo: "ABC vs Falcons (Agendado)", pontos: "-", lancamentos: "-", triplos: "-", ressaltos: "-", assistencias: "-", blocos: "-", analise: "O jogo ainda não foi jogado." },
    21: { titulo: "Porto Lions vs ABC (Agendado)", pontos: "-", lancamentos: "-", triplos: "-", ressaltos: "-", assistencias: "-", blocos: "-", analise: "Jogo futuro." },
    27: { titulo: "ABC vs Saltitões (Agendado)", pontos: "-", lancamentos: "-", triplos: "-", ressaltos: "-", assistencias: "-", blocos: "-", analise: "Jogo futuro." },
    31: { titulo: "Águias vs ABC (Agendado)", pontos: "-", lancamentos: "-", triplos: "-", ressaltos: "-", assistencias: "-", blocos: "-", analise: "Jogo futuro." }
};



// ============================================================
// 3. Carregar estatísticas — jogojogado.html
// ============================================================
if (window.location.pathname.includes("jogojogado.html")) {

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    const jogo = jogos[id];

    if (!jogo) {
        document.getElementById("tituloJogo").textContent = "Jogo não encontrado.";
        document.getElementById("analiseTexto").textContent =
            "O jogo selecionado não existe na base de dados.";
    } else {
        document.getElementById("tituloJogo").textContent = jogo.titulo;
        document.getElementById("pontos").textContent = jogo.pontos;
        document.getElementById("lancamentos").textContent = jogo.lancamentos;
        document.getElementById("triplos").textContent = jogo.triplos;
        document.getElementById("ressaltos").textContent = jogo.ressaltos;
        document.getElementById("assistencias").textContent = jogo.assistencias;
        document.getElementById("blocos").textContent = jogo.blocos;
        document.getElementById("analiseTexto").textContent = jogo.analise;
    }
}



// ============================================================
// 4. Acessibilidade — Botão e Painel
// ============================================================
const accessBtn = document.getElementById("accessibility-btn");

if (accessBtn) {
    accessBtn.addEventListener("click", () => {
        const panel = document.getElementById("accessibility-panel");
        panel.style.display = panel.style.display === "block" ? "none" : "block";
    });
}



// ============================================================
// 5. Acessibilidade — Funções (Contraste • Tamanho fonte)
// ============================================================

// Alternar contraste
function toggleContrast() {
    document.body.classList.toggle("high-contrast");

    localStorage.setItem(
        "contraste",
        document.body.classList.contains("high-contrast") ? "on" : "off"
    );
}

// Aumentar fonte
function increaseFont() {
    let size = parseFloat(getComputedStyle(document.body).fontSize);
    size += 2;
    document.body.style.fontSize = size + "px";
    localStorage.setItem("fontSize", size + "px");
}

// Diminuir fonte
function decreaseFont() {
    let size = parseFloat(getComputedStyle(document.body).fontSize);
    size = Math.max(10, size - 2); // mínimo de 10px
    document.body.style.fontSize = size + "px";
    localStorage.setItem("fontSize", size + "px");
}

// Repor tudo
function resetAccessibility() {
    document.body.classList.remove("high-contrast");
    localStorage.setItem("contraste", "off");

    document.body.style.fontSize = "";
    localStorage.removeItem("fontSize");

    alert("Definições de acessibilidade repostas.");
}



// ============================================================
// 6. Persistência das Definições (Contraste + Fonte)
// ============================================================
window.addEventListener("DOMContentLoaded", () => {

    // Contraste
    if (localStorage.getItem("contraste") === "on") {
        document.body.classList.add("high-contrast");
    }

    // Fonte
    const savedSize = localStorage.getItem("fontSize");
    if (savedSize) {
        document.body.style.fontSize = savedSize;
    }
});