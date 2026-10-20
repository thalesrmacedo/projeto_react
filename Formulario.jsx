
import { useState } from "react";

function Formulario({ adicionar }) {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("despesa");
  const [categoria, setCategoria] = useState("Alimentação");
  const [data, setData] = useState(
    new Date().toLocaleDateString("en-CA")
  );

  function cadastrar(e) {
    e.preventDefault();

    if (!descricao.trim() || Number(valor) <= 0 || !data) {
      return;
    }

    adicionar({
      descricao: descricao.trim(),
      valor: Number(valor),
      tipo,
      categoria: tipo === "receita" ? "Receita" : categoria,
      data
    });

    setDescricao("");
    setValor("");
  }

  return (
    <section className="bloco">
      <h2>Nova Transação</h2>

      <form onSubmit={cadastrar}>
        <label>Descrição</label>
        <input
          type="text"
          value={descricao}
          onChange={e => setDescricao(e.target.value)}
          placeholder="Ex: Supermercado"
          required
        />

        <label>Valor (R$)</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          value={valor}
          onChange={e => setValor(e.target.value)}
          required
        />

        <label>Tipo</label>
        <select
          value={tipo}
          onChange={e => setTipo(e.target.value)}
        >
          <option value="despesa">Despesa</option>
          <option value="receita">Receita</option>
        </select>

        {tipo === "despesa" && (
          <>
            <label>Categoria</label>
            <select
              value={categoria}
              onChange={e => setCategoria(e.target.value)}
            >
              <option>Alimentação</option>
              <option>Moradia</option>
              <option>Transporte</option>
              <option>Lazer</option>
              <option>Saúde</option>
              <option>Educação</option>
              <option>Outros</option>
            </select>
          </>
        )}

        <label>Data</label>
        <input
          type="date"
          value={data}
          onChange={e => setData(e.target.value)}
          required
        />

        <button type="submit">Adicionar Transação</button>
      </form>
    </section>
  );
}

export default Formulario;
