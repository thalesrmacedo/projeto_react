
function Resumo({ receitas, despesas, saldo }) {
  const moeda = valor =>
    valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });

  return (
    <section className="resumo">
      <div className="card receita">
        <h3>Receitas</h3>
        <h2>{moeda(receitas)}</h2>
      </div>

      <div className="card despesa">
        <h3>Despesas</h3>
        <h2>{moeda(despesas)}</h2>
      </div>

      <div className="card saldo">
        <h3>Saldo Total</h3>
        <h2>{moeda(saldo)}</h2>
      </div>
    </section>
  );
}

export default Resumo;
