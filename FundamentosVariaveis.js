
/*
 * DESAFIOS PRÁTICOS — INTRODUÇÃO AO JAVASCRIPT
 * Bloco 1: Fundamentos e Variáveis
 *
 * Objetivos:
 * 1. Trabalhar com let e operadores aritméticos.
 * 2. Compreender constantes e erros de reatribuição.
 * 3. Identificar os tipos primitivos com typeof.
 * 4. Construir frases com Template Literals e concatenação.
 */


// 1. VARIÁVEIS COM LET


console.log("===== 1. VARIÁVEIS COM LET =====");

// Declaração da variável com valor inicial.
let pontos = 50;

// Adiciona 10 pontos na linha seguinte.
pontos = pontos + 10;

// Exibe o resultado atualizado.
console.log("Pontuação final:", pontos); // 60



// 2. CONSTANTES COM CONST


console.log("\n===== 2. CONSTANTES COM CONST =====");

// Declaração de uma constante com valor 100.
const MAX_PONTOS = 100;

console.log("Máximo de pontos:", MAX_PONTOS);

// Tentativa de reatribuição da constante.
// O try/catch captura o erro para que o programa
// continue executando os próximos desafios.

try {
    MAX_PONTOS = 200;
} catch (erro) {
    console.log("Erro ao reatribuir MAX_PONTOS:");
    console.log(erro.name + ": " + erro.message);
}

// Explicação:
// Uma variável declarada com const não pode receber
// outro valor por meio de uma nova atribuição.
// Em JavaScript, essa tentativa gera um TypeError.
// O erro é capturado pelo catch para não interromper
// a execução do restante do arquivo.



// 3. TIPOS PRIMITIVOS E OPERADOR TYPEOF


console.log("\n===== 3. TIPOS PRIMITIVOS =====");

// String: representa textos.
let nome = "Raymundo";

// Number: representa números.
let idade = 20;

// Boolean: representa verdadeiro ou falso.
let estudante = true;

// Undefined: variável declarada sem valor atribuído.
let curso;

// Null: representa a ausência intencional de valor.
let endereco = null;

// Exibição dos valores e de seus tipos.
console.log("Nome:", nome, "| Tipo:", typeof nome);
console.log("Idade:", idade, "| Tipo:", typeof idade);
console.log("Estudante:", estudante, "| Tipo:", typeof estudante);
console.log("Curso:", curso, "| Tipo:", typeof curso);
console.log("Endereço:", endereco, "| Tipo:", typeof endereco);

// Observação:
// typeof null retorna "object" por uma particularidade
// histórica da linguagem JavaScript. Apesar disso,
// null é considerado um valor primitivo.



// 4. TEMPLATE LITERALS E CONCATENAÇÃO


console.log("\n===== 4. TEMPLATE LITERALS E CONCATENAÇÃO =====");

// Variáveis utilizadas na construção das frases.
let personagem = "Link";
let jogo = "The Legend of Zelda";

// Forma 1: Template Literals usando crases e ${}.
let fraseTemplate = `O personagem ${personagem} é protagonista de ${jogo}.`;

console.log("Template Literals:");
console.log(fraseTemplate);

// Forma 2: Concatenação usando o operador +.
let fraseConcatenacao =
    "O personagem " + personagem +
    " é protagonista de " + jogo + ".";

console.log("Concatenação com +:");
console.log(fraseConcatenacao);

// Comparação: as duas formas produzem a mesma frase.
console.log(
    "As frases são iguais?",
    fraseTemplate === fraseConcatenacao
);
