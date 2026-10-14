
const formulario = document.querySelector("#formulario");
const campoNome = document.querySelector("#nome-pokemon");
const botaoBuscar = document.querySelector("#botao-buscar");
const statusTela = document.querySelector("#status");

const resultado = document.querySelector("#resultado");
const nomeResultado = document.querySelector("#nome-resultado");
const imagemPokemon = document.querySelector("#imagem-pokemon");
const tiposPokemon = document.querySelector("#tipos-pokemon");

// Limpa os dados de uma busca anterior.
function limparResultado() {
  nomeResultado.textContent = "";
  imagemPokemon.removeAttribute("src");
  imagemPokemon.alt = "";
  imagemPokemon.hidden = true;
  tiposPokemon.replaceChildren();
  resultado.hidden = true;
}

// Busca um Pokémon na PokéAPI.
async function buscarPokemon(nome) {
  // Estado 1: carregando.
  botaoBuscar.disabled = true;
  botaoBuscar.textContent = "Buscando...";
  statusTela.textContent = "Buscando Pokémon...";
  limparResultado();

  try {
    const resposta = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(nome)}`
    );

    // O fetch não lança erro automaticamente para HTTP 404.
    if (resposta.status === 404) {
      statusTela.textContent = "Pokémon não encontrado.";
      return;
    }

    // Trata outros erros HTTP.
    if (!resposta.ok) {
      throw new Error("Falha na comunicação com a PokéAPI.");
    }

    const dados = await resposta.json();

    // Estado 4: sucesso.
    nomeResultado.textContent = dados.name;

    const imagem = dados.sprites.front_default;

    if (imagem) {
      imagemPokemon.src = imagem;
      imagemPokemon.alt = `Imagem do Pokémon ${dados.name}`;
      imagemPokemon.hidden = false;
    }

    // Exibe os tipos do Pokémon.
    dados.types.forEach((item) => {
      const tipo = document.createElement("li");
      tipo.textContent = item.type.name;
      tiposPokemon.append(tipo);
    });

    resultado.hidden = false;
    statusTela.textContent = "";

  } catch (erro) {
    // Estado 2: erro de rede ou falha inesperada.
    console.error("Erro ao buscar Pokémon:", erro);
    limparResultado();
    statusTela.textContent =
      "Falha na conexão. Verifique sua internet e tente novamente.";

  } finally {
    // Restaura o botão mesmo se houver erro.
    botaoBuscar.disabled = false;
    botaoBuscar.textContent = "Buscar";
  }
}

// Valida o formulário antes de realizar a consulta.
formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  // Remove espaços externos e converte para minúsculo.
  const nome = campoNome.value.trim().toLowerCase();

  if (nome === "") {
    statusTela.textContent = "Digite o nome de um Pokémon.";
    limparResultado();
    campoNome.focus();
    return;
  }

  buscarPokemon(nome);
});
