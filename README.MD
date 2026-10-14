# Arrays, DOM e Eventos — JavaScript

## 📌 Sobre o projeto

Este projeto foi desenvolvido como parte dos desafios práticos da aula de Introdução ao JavaScript. O objetivo é aplicar conceitos fundamentais da linguagem, trabalhando com arrays, métodos de manipulação de dados, DOM, eventos e criação dinâmica de elementos HTML.

O projeto utiliza **HTML5 e JavaScript ES6+**, sendo executado diretamente no navegador.

## 🎯 Objetivos

- Compreender e aplicar métodos de arrays.
- Manipular elementos HTML por meio do DOM.
- Criar e modificar elementos dinamicamente.
- Trabalhar com eventos de mouse, teclado e formulários.
- Implementar Event Delegation para gerenciar eventos de elementos existentes e criados dinamicamente.

- **`index.html`**: contém a estrutura da página, os campos de entrada, o botão e a lista de tarefas.
- **`app.js`**: contém a lógica JavaScript, os métodos de arrays, a manipulação do DOM e os listeners de eventos.
- **`README.md`**: apresenta a documentação e as instruções de execução do projeto.

## 🔹 1. Arrays e métodos

Os arrays permitem armazenar vários valores em uma única estrutura. O JavaScript oferece métodos que facilitam a transformação, a filtragem e o processamento desses dados.

### `forEach()`

Percorre os elementos de um array e executa uma função para cada elemento. Neste projeto, é utilizado para imprimir saudações e exibir os nomes e preços dos produtos.

### `map()`

Cria um **novo array** a partir da transformação de cada elemento do array original. Foi utilizado para converter nomes em letras maiúsculas e extrair os nomes de uma lista de produtos.

### `filter()`

Cria um novo array contendo somente os elementos que atendem a uma condição. No projeto, seleciona preços acima de R$ 20 e produtos com preços inferiores a R$ 50.

### `reduce()`

Percorre os elementos de um array e acumula seus valores em um único resultado. É utilizado para calcular a soma dos preços e o valor total dos produtos.

## 🔹 2. Manipulação do DOM

O DOM (*Document Object Model*) representa o documento HTML como uma estrutura de objetos que pode ser acessada e modificada pelo JavaScript.

Os métodos utilizados incluem:

- **`querySelector()`**: seleciona o primeiro elemento que corresponde a um seletor CSS.
- **`querySelectorAll()`**: seleciona todos os elementos que correspondem a um seletor CSS.
- **`innerHTML`**: permite inserir conteúdo HTML dentro de um elemento.
- **`createElement()`**: cria um novo elemento HTML.
- **`append()`**: adiciona elementos ou textos ao final de outro elemento.
- **`textContent`**: consulta ou altera o conteúdo textual de um elemento.
- **`classList.add()`**: adiciona uma classe CSS a um elemento.
- **`classList.contains()`**: verifica se uma classe está presente.
- **`classList.toggle()`**: adiciona uma classe se ela estiver ausente ou a remove se já existir.

Esses recursos permitem atualizar títulos, criar itens de listas, aplicar estilos e modificar a página sem precisar recarregá-la.

## 🔹 3. Eventos em JavaScript

Os eventos permitem executar funções em resposta às ações do usuário.

Neste projeto, são utilizados:

- **`addEventListener("click", ...)`**: executa uma ação quando o botão ou um item da lista é clicado.
- **`addEventListener("mouseover", ...)`**: altera o texto do botão quando o ponteiro do mouse passa sobre ele.
- **`addEventListener("keyup", ...)`**: captura o valor atual do campo de nome após a liberação de uma tecla.
- **`addEventListener("submit", ...)`**: processa o envio do formulário de tarefas.
- **`preventDefault()`**: impede o comportamento padrão do formulário, evitando o recarregamento da página.
- **`trim()`**: remove espaços em branco no início e no final do texto, permitindo impedir o cadastro de tarefas vazias.

## 🔹 4. Event Delegation

Event Delegation, ou delegação de eventos, é uma técnica que consiste em adicionar um único listener a um elemento ancestral para tratar eventos originados em seus elementos descendentes.

Neste projeto, o listener de `click` é registrado na lista `#lista`, em vez de ser adicionado individualmente a cada elemento `<li>`.

A propriedade `e.target` identifica o elemento que originou o evento. Com ela, o código verifica se o elemento clicado é um `<li>`, alterna a classe `feito` e imprime o texto da tarefa no console.

### Por que utilizar Event Delegation?

- **Menos listeners:** evita registrar um evento individual para cada item.
- **Elementos dinâmicos:** itens criados depois da configuração do listener também podem responder aos cliques.
- **Manutenção simplificada:** a lógica do evento fica centralizada em um único lugar.
- **Eficiência:** reduz a quantidade de listeners registrados quando existem muitos elementos.

Essa técnica é especialmente útil em listas, tabelas, menus e interfaces que recebem novos elementos durante a execução.

## ▶️ Como executar o projeto

1. Baixe ou clone o repositório.
2. Mantenha `index.html` e `app.js` na mesma pasta.
3. Abra o arquivo `index.html` no navegador.
4. Pressione `F12` para abrir as ferramentas do desenvolvedor.
5. Acesse a aba **Console** para acompanhar as mensagens.
6. Teste o botão, digite no campo de nome, clique nas tarefas e adicione novas tarefas pelo formulário.

Não é necessário instalar dependências para executar a versão básica do projeto.

## 🧪 Funcionalidades implementadas

- Processamento de arrays com `forEach()`, `map()`, `filter()` e `reduce()`.
- Seleção e alteração de elementos HTML.
- Criação dinâmica de itens de lista.
- Aplicação e alternância de classes CSS.
- Eventos de clique, mouse e teclado.
- Cadastro de tarefas por formulário.
- Validação de campos vazios.
- Event Delegation para itens existentes e criados dinamicamente.

## 📚 Tecnologias utilizadas

- HTML5
- JavaScript ES6+
- DOM API
- CSS3

## 👨‍💻 Conclusão

O projeto demonstra como JavaScript pode transformar uma página HTML estática em uma interface interativa. Os métodos de arrays facilitam o processamento de dados, a manipulação do DOM permite atualizar a página dinamicamente e o Event Delegation oferece uma abordagem organizada para lidar com eventos em elementos que são adicionados durante a execução.

A atividade consolida conhecimentos essenciais para o desenvolvimento front-end e serve como base para projetos web mais complexos.