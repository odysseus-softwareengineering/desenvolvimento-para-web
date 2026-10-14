
const pedidos = [
  { cliente: "Bia", valor: 120, status: "pago" },
  { cliente: "Carlos", valor: 80.5, status: "pendente" },
  { cliente: "Ana", valor: 200, status: "pago" },
  { cliente: "", valor: 50, status: "pago" },
  { cliente: "Pedro", valor: -30, status: "pago" },
  { cliente: "Marina", valor: 75.25, status: "pago" },
  { cliente: "Lucas", valor: "100", status: "pago" }
];

// 1. Validar os pedidos:
// - O cliente não pode estar vazio.
// - O valor precisa ser numérico e maior que zero.
const pedidosValidos = pedidos.filter((pedido) => {
  return (
    typeof pedido.cliente === "string" &&
    pedido.cliente.trim() !== "" &&
    typeof pedido.valor === "number" &&
    Number.isFinite(pedido.valor) &&
    pedido.valor > 0
  );
});

console.log("Pedidos válidos:");
console.log(pedidosValidos);

// 2. Filtrar somente os pedidos com status "pago".
const pedidosPagos = pedidosValidos.filter((pedido) => {
  return pedido.status === "pago";
});

console.log("\nPedidos pagos:");
console.log(pedidosPagos);

// 3. Calcular o total faturado usando reduce().
const totalFaturado = pedidosPagos.reduce((total, pedido) => {
  return total + pedido.valor;
}, 0);

console.log("\nTotal faturado: R$", totalFaturado.toFixed(2));

// 4. Gerar textos no formato "Bia — R$ 120.00".
const textosPedidos = pedidosPagos.map((pedido) => {
  return `${pedido.cliente.trim()} — R$ ${pedido.valor.toFixed(2)}`;
});

console.log("\nResumo dos pedidos pagos:");
textosPedidos.forEach((texto) => {
  console.log(texto);
});
