
function ListaTransacoes({ transacoes, excluir }) {
  const moeda = valor =>
    valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });

  const ordenadas = [...transacoes].sort(
    (a, b) => b.data.localeCompare(a.data)
  );

  return (
    <section className="bloco">
      <h2>Histórico de Transações</h2>

      <div className="tabela-container">
        <table>
          <thead>
            <tr>
              <th>Data</th>
              <th>Descrição</th>
              <th>Categoria</th>
              <th>Tipo</th>
              <th>Valor</th>
              <th>Ação</th>
            </tr>
          </thead>

          <tbody>
            {ordenadas.map(t => (
              <tr key={t.id}>
                <td>{t.data.split("-").reverse().join("/")}</td>
                <td>{t.descricao}</td>
                <td>{t.categoria}</td>
                <td>{t.tipo}</td>
                <td className={t.tipo}>
                  {t.tipo === "receita" ? "+" : "-"}
                  {moeda(t.valor)}
                </td>
                <td>
                  <button
                    className="excluir"
                    onClick={() => excluir(t.id)}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {transacoes.length === 0 && (
        <p>Nenhuma transação cadastrada.</p>
      )}
    </section>
  );
}

export default ListaTransacoes;
