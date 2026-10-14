
/*
 * DESAFIOS PRÁTICOS — INTRODUÇÃO AO JAVASCRIPT
 * Bloco 3: Controle de Fluxo
 *
 * Conteúdos:
 * - if/else
 * - switch/case/default
 * - Laço for
 * - Laço while
 * - Operador módulo (%)
 */

// 1. CLASSIFICAÇÃO DE NOTAS COM IF/ELSE

console.log("===== 1. CLASSIFICAÇÃO DE NOTAS =====");

// Retorna "Aprovado" para notas >= 6
// e "Reprovado" para notas menores que 6.
function classificarNota(nota) {
    if (nota >= 6) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

// Testes da função.
console.log("Nota 8:", classificarNota(8)); // Aprovado
console.log("Nota 6:", classificarNota(6)); // Aprovado
console.log("Nota 4:", classificarNota(4)); // Reprovado


// 2. SEMÁFORO COM SWITCH

console.log("\n===== 2. SEMÁFORO =====");

// Cor atual do semáforo.
const corSemaforo = "amarelo";

switch (corSemaforo) {
    case "vermelho":
        console.log("Pare");
        break;

    case "amarelo":
        console.log("Atenção");
        break;

    case "verde":
        console.log("Siga");
        break;

    default:
        console.log("Cor de semáforo inválida");
        break;
}

// O break evita a execução dos próximos casos
// quando um caso correspondente é encontrado.


// 3. TABUADA DO 5 COM FOR

console.log("\n===== 3. TABUADA DO 5 =====");

for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

// O for começa em 1, repete até 10 e incrementa
// a variável i em uma unidade a cada repetição.


// ==================================================
// 4. CONTAGEM REGRESSIVA COM WHILE
// ==================================================

console.log("\n===== 4. CONTAGEM REGRESSIVA =====");

let contador = 5;

while (contador >= 1) {
    console.log(contador);
    contador--;
}

// O while executa enquanto contador >= 1.
// O decremento evita um loop infinito.


// 5. NÚMEROS PARES E ÍMPARES COM FOR

console.log("\n===== 5. PARES E ÍMPARES COM FOR =====");

for (let numero = 1; numero <= 20; numero++) {
    if (numero % 2 === 0) {
        console.log(`${numero}: par`);
    } else {
        console.log(`${numero}: ímpar`);
    }
}

// O operador % retorna o resto da divisão.
// Se numero % 2 === 0, o número é par.


// 6. NÚMEROS PARES E ÍMPARES COM WHILE

console.log("\n===== 6. PARES E ÍMPARES COM WHILE =====");

let numeroWhile = 1;

while (numeroWhile <= 20) {
    if (numeroWhile % 2 === 0) {
        console.log(`${numeroWhile}: par`);
    } else {
        console.log(`${numeroWhile}: ímpar`);
    }

    numeroWhile++;
}

// O while percorre os números de 1 a 20.
// O incremento garante que o laço termine.



// 7. DIA DA SEMANA COM SWITCH

console.log("\n===== 7. DIA DA SEMANA =====");

// Recebe um número de 1 a 7 e retorna o dia
// correspondente. Valores inválidos retornam
// uma mensagem de erro.

function diaDaSemana(numero) {
    switch (numero) {
        case 1:
            return "Domingo";

        case 2:
            return "Segunda-feira";

        case 3:
            return "Terça-feira";

        case 4:
            return "Quarta-feira";

        case 5:
            return "Quinta-feira";

        case 6:
            return "Sexta-feira";

        case 7:
            return "Sábado";

        default:
            return "Número inválido. Informe um número de 1 a 7.";
    }
}

// Testes da função.
console.log("Dia 1:", diaDaSemana(1)); // Domingo
console.log("Dia 4:", diaDaSemana(4)); // Quarta-feira
console.log("Dia 7:", diaDaSemana(7)); // Sábado
console.log("Dia 9:", diaDaSemana(9)); // Número inválido
