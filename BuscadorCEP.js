
const formulario = document.querySelector("#formulario");
const campoCep = document.querySelector("#cep");
const botaoBuscar = document.querySelector("#botao-buscar");
const statusTela = document.querySelector("#status");
const secaoResultado = document.querySelector("#secao-resultado");
const resultado = document.querySelector("#resultado");
const historicoLista = document.querySelector("#historico");

// Bônus: histórico armazenado em um array de objetos.
const historico = [];

// Consulta o CEP utilizando a API ViaCEP.
async function buscarCep(cep) {
  // Estado de carregamento.
  botaoBuscar.disabled = true;
  botaoBuscar.textContent = "Buscando...";
  statusTela.textContent = "Buscando...";
  resultado.replaceChildren();
  secaoResultado.hidden = true;

  try {
    const resposta = await fetch(
      `https://viacep.com.br/ws/${cep}/json/`
    );

    // Trata respostas HTTP que não foram bem-sucedidas.
    if (!resposta.ok) {
      throw new Error("Falha na conexão com o serviço.");
    }

    const dados = await resposta.json();

    // Estado de CEP não encontrado.
    if (dados.erro) {
      statusTela.textContent = "CEP não encontrado.";
      return;
    }

    // Estado de sucesso.
    resultado.replaceChildren();

    const campos = [
      ["Rua", dados.logradouro],
      ["Bairro", dados.bairro],
      ["Cidade", dados.localidade],
      ["UF", dados.uf]
    ];

    campos.forEach(([rotulo, valor]) => {
      const termo = document.createElement("dt");
      termo.textContent = rotulo;

      const descricao = document.createElement("dd");
      descricao.textContent = valor || "Não informado";

      resultado.append(termo, descricao);
    });

    secaoResultado.hidden = false;
    statusTela.textContent = "";

    // Registra a consulta no histórico.
    historico.push({
      cep: cep,
      rua: dados.logradouro || "Não informada",
      bairro: dados.bairro || "Não informado",
      cidade: dados.localidade || "Não informada",
      uf: dados.uf || "Não informada"
    });

    atualizarHistorico();

  } catch (erro) {
    // Trata erros de rede, JSON e falhas HTTP.
    console.error("Erro na consulta:", erro);
    statusTela.textContent =
      "Falha na conexão. Verifique sua internet e tente novamente.";

  } finally {
    // Restaura o botão independentemente do resultado.
    botaoBuscar.disabled = false;
    botaoBuscar.textContent = "Buscar";
  }
}

// Valida e envia o CEP digitado.
formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  // Remove espaços do início e do final.
  const cep = campoCep.value.trim();

  // Exige exatamente oito dígitos numéricos.
  const formatoValido = /^\d{8}$/.test(cep);

  if (!formatoValido) {
    statusTela.textContent =
      "Digite um CEP válido com exatamente 8 dígitos.";
    resultado.replaceChildren();
    secaoResultado.hidden = true;
    campoCep.focus();
    return;
  }

  buscarCep(cep);
});

// Atualiza a lista de pesquisas realizadas.
function atualizarHistorico() {
  historicoLista.replaceChildren();

  if (historico.length === 0) {
    const itemVazio = document.createElement("li");
    itemVazio.textContent = "Nenhuma pesquisa realizada.";
    historicoLista.append(itemVazio);
    return;
  }

  historico.forEach((pedido) => {
    const item = document.createElement("li");

    item.textContent =
      `${pedido.cep} — ${pedido.cidade}/${pedido.uf} — ${pedido.rua}`;

    historicoLista.append(item);
  });
}
