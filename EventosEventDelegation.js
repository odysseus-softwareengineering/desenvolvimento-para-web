console.log("===== 1. EVENTO CLICK =====");

const botao = document.querySelector("#botao");

botao.addEventListener("click", () => {
    console.log("Clicou!");
});

console.log("\n===== 2. EVENTO MOUSEOVER =====");

botao.addEventListener("mouseover", () => {
    botao.textContent = "Pode clicar!";
});

console.log("\n===== 3. EVENTO KEYUP =====");

const campoNome = document.querySelector("#nome");

campoNome.addEventListener("keyup", () => {
    console.log("Nome digitado:", campoNome.value);
});

console.log("\n===== 4. EVENT DELEGATION =====");

const lista = document.querySelector("#lista");

// Um único listener para todos os <li> da lista.
// Também funcionará com os itens criados futuramente.
lista.addEventListener("click", (e) => {
    // Verifica se o elemento clicado é um <li>.
    if (e.target.matches("li")) {
        // Alterna a classe feito.
        e.target.classList.toggle("feito");

        // Exibe o texto do item clicado.
        console.log("Item clicado:", e.target.textContent);
    }
});

console.log("\n===== 5. ITEM DINÂMICO =====");

const novoItem = document.createElement("li");

novoItem.textContent = "Item criado pelo JavaScript";

lista.append(novoItem);

console.log("Novo item adicionado à lista.");

// Não é necessário adicionar outro listener ao novo item.
// O listener da lista já trata o clique por delegação.

console.log("\n===== 6. FORMULÁRIO DE TAREFAS =====");

const formulario = document.querySelector("#formulario");
const campoTarefa = document.querySelector("#tarefa");

formulario.addEventListener("submit", (e) => {
    // Impede o recarregamento da página.
    e.preventDefault();

    // Captura o texto e remove espaços nas extremidades.
    const textoTarefa = campoTarefa.value.trim();

    // Se estiver vazio, não adiciona nenhum item.
    if (textoTarefa === "") {
        console.log("Digite uma tarefa válida.");
        campoTarefa.focus();
        return;
    }

    // Cria um novo elemento <li>.
    const item = document.createElement("li");

    // Define o texto da tarefa.
    item.textContent = textoTarefa;

    // Adiciona o item à lista.
    lista.append(item);

    // Limpa o campo após adicionar a tarefa.
    campoTarefa.value = "";

    // Devolve o foco ao campo para facilitar novas tarefas.
    campoTarefa.focus();

    console.log("Tarefa adicionada:", textoTarefa);
});

console.log("Eventos configurados com sucesso!");
