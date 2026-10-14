console.log("===== 1. ARRAY DE NOMES =====");

// Criação do array com três nomes.
const nomes = ["Raymundo", "Ana", "Carlos"];

// forEach(): imprime uma saudação para cada nome.
console.log("\nSaudações:");

nomes.forEach(nome => {
    console.log(`Olá, ${nome}!`);
});

// map(): cria um novo array com os nomes em maiúsculas.
const nomesMaiusculos = nomes.map(nome => nome.toUpperCase());

console.log("\nNomes em maiúsculas:");
console.log(nomesMaiusculos);

console.log("\n===== 2. ARRAY DE PREÇOS =====");

// Criação do array de preços.
const precos = [10, 25, 40, 5, 60];

// filter(): seleciona apenas os preços acima de 20.
const precosAcimaDe20 = precos.filter(preco => preco > 20);

console.log("\nPreços acima de R$ 20:");
console.log(precosAcimaDe20);

// reduce(): soma todos os preços.
const somaPrecos = precos.reduce((total, preco) => {
    return total + preco;
}, 0);

console.log("\nSoma de todos os preços:");
console.log(`R$ ${somaPrecos.toFixed(2)}`);

console.log("\n===== 3. ARRAY DE PRODUTOS =====");

// Cada objeto possui nome e preço.
const produtos = [
    { nome: "Caderno", preco: 15 },
    { nome: "Caneta", preco: 5 },
    { nome: "Mochila", preco: 80 },
    { nome: "Borracha", preco: 3 },
    { nome: "Estojo", preco: 25 }
];

// map(): extrai somente os nomes dos produtos.
const nomesProdutos = produtos.map(produto => produto.nome);

console.log("\nNomes dos produtos:");
console.log(nomesProdutos);

// filter(): seleciona produtos com preço menor que 50.
const produtosBaratos = produtos.filter(produto => produto.preco < 50);

console.log("\nProdutos com preço menor que R$ 50:");
console.log(produtosBaratos);

// reduce(): soma os preços de todos os produtos.
const valorTotal = produtos.reduce((total, produto) => {
    return total + produto.preco;
}, 0);

console.log("\nValor total dos produtos:");
console.log(`R$ ${valorTotal.toFixed(2)}`);

// forEach(): imprime o nome e o preço de cada produto.
console.log("\nLista de produtos e preços:");

produtos.forEach(produto => {
    console.log(`${produto.nome}: R$ ${produto.preco.toFixed(2)}`);
});

console.log("\n===== FIM DOS EXERCÍCIOS DE ARRAYS =====");
