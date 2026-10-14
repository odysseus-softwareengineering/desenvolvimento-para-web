
/*
 * DESAFIOS PRÁTICOS — INTRODUÇÃO AO JAVASCRIPT
 * Bloco 2: Funções
 *
 * Objetivos:
 * 1. Demonstrar hoisting com função declarada.
 * 2. Comparar função declarada e função de expressão.
 * 3. Criar a função dobro em três formatos.
 * 4. Utilizar parâmetros com valores padrão.
 */


// 1. FUNÇÃO DECLARADA E HOISTING


console.log("===== 1. FUNÇÃO DECLARADA E HOISTING =====");

// Chamando a função antes de sua declaração.
// Isso funciona porque declarações de função
// são elevadas durante a preparação do código.

console.log("Idade 20:", ehMaiorDeIdade(20)); // false
console.log("Idade 18:", ehMaiorDeIdade(18)); // true
console.log("Idade 25:", ehMaiorDeIdade(25)); // true

// Declaração da função.
function ehMaiorDeIdade(idade) {
    return idade >= 18;
}

// Explicação:
// Hoisting é o comportamento pelo qual declarações
// de função ficam disponíveis antes de sua posição
// no código. A função retorna true para idades
// maiores ou iguais a 18 e false nos demais casos.



// 2. FUNÇÃO DE EXPRESSÃO E REFERENCEERROR

console.log("\n===== 2. FUNÇÃO DE EXPRESSÃO =====");

// Tentativa de chamar a função antes da declaração.
// O try/catch permite demonstrar o erro sem
// interromper o restante do programa.

try {
    console.log(ehMaiorDeIdadeExpressao(20));
} catch (erro) {
    console.log("Erro ao chamar antes da declaração:");
    console.log(erro.name + ": " + erro.message);
}

// A função é atribuída a uma constante.
const ehMaiorDeIdadeExpressao = function (idade) {
    return idade >= 18;
};

// Após a inicialização, a chamada funciona.
console.log(
    "Idade 20 após a declaração:",
    ehMaiorDeIdadeExpressao(20)
); // true

// Explicação:
// A função de expressão está armazenada em uma
// constante declarada com const. A variável não pode
// ser acessada antes de sua inicialização.
// Por isso, a tentativa anterior gera ReferenceError.



// 3. FUNÇÃO DOBRO EM TRÊS FORMAS

console.log("\n===== 3. FUNÇÃO DOBRO =====");

// Forma 1: função declarada.
function dobroDeclarada(n) {
    return n * 2;
}

console.log("Função declarada:", dobroDeclarada(5)); // 10


// Forma 2: função de expressão.
const dobroExpressao = function (n) {
    return n * 2;
};

console.log("Função de expressão:", dobroExpressao(5)); // 10


// Forma 3: arrow function com retorno implícito.
const dobroArrow = n => n * 2;

console.log("Arrow function:", dobroArrow(5)); // 10

// Explicação:
// As três funções recebem um número e retornam
// seu dobro. A arrow function utiliza uma sintaxe
// curta, com retorno implícito quando a expressão
// não está envolvida por chaves.


// 4. PARÂMETRO COM VALOR PADRÃO

console.log("\n===== 4. PARÂMETRO COM VALOR PADRÃO =====");

// Se nenhum argumento for informado, n assume 1.
function dobroComPadrao(n = 1) {
    return n * 2;
}

// Chamada com argumento.
console.log("Dobro de 5:", dobroComPadrao(5)); // 10

// Chamada sem argumento.
console.log("Dobro sem argumento:", dobroComPadrao()); // 2

// Explicação:
// O parâmetro n recebe o valor padrão 1 quando
// a função é chamada sem argumento ou quando
// o argumento informado é undefined.
// Portanto, dobroComPadrao() retorna 2.
