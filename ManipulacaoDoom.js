console.log("===== 1. SELEÇÃO DO H1 =====");

const titulo = document.querySelector("#titulo");

titulo.textContent = "Blog do Raymundo";

console.log("Título atualizado:", titulo.textContent);

console.log("\n===== 2. SELEÇÃO DOS PARÁGRAFOS =====");

const paragrafos = document.querySelectorAll(".texto");

paragrafos.forEach(paragrafo => {
    console.log(paragrafo.textContent);
});

console.log("\n===== 3. INSERÇÃO COM innerHTML =====");

const lista = document.querySelector("#lista");

lista.innerHTML = `
    <li>Primeiro item</li>
    <li>Segundo item</li>
`;

console.log("Dois itens iniciais adicionados.");

console.log("\n===== 4. CRIAÇÃO DO TERCEIRO ITEM =====");

const terceiroItem = document.createElement("li");

terceiroItem.textContent = "Terceiro item";

lista.append(terceiroItem);

// Aplicar a classe destaque.
terceiroItem.classList.add("destaque");

// Verificar se a classe foi aplicada.
console.log(
    "O terceiro item possui a classe destaque?",
    terceiroItem.classList.contains("destaque")
);

console.log("\n===== 5. LISTA DE TAREFAS =====");

const tarefas = [
    "Estudar JS",
    "Fazer exercícios",
    "Revisar DOM"
];

// Adicionar cada tarefa como um novo <li>.
tarefas.forEach(tarefa => {
    const item = document.createElement("li");

    item.textContent = tarefa;

    lista.append(item);
});

console.log("\n===== 6. CLASSE FEITO =====");

const primeiroItem = lista.querySelector("li");

primeiroItem.classList.add("feito");

console.log(
    "O primeiro item possui a classe feito?",
    primeiroItem.classList.contains("feito")
);

console.log("\n===== 7. QUANTIDADE DE ITENS =====");

const quantidadeItens = lista.querySelectorAll("li").length;

console.log("Quantidade total de itens:", quantidadeItens);

// Resultado esperado: 6
// 2 itens iniciais + 1 terceiro item + 3 tarefas.

console.log("\n===== FIM DOS EXERCÍCIOS DE DOM =====");
