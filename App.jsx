
import { useState, useEffect } from "react";
import Resumo from "./components/Resumo";
import Formulario from "./components/Formulario";
import ListaTransacoes from "./components/ListaTransacoes";
import Grafico from "./components/Grafico";
import "./App.css";

function App() {
  const [transacoes, setTransacoes] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("transacoes")) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("transacoes", JSON.stringify(transacoes));
  }, [transacoes]);

  function adicionarTransacao(transacao) {
    setTransacoes([...transacoes, {
      ...transacao,
      id: crypto.randomUUID()
    }]);
  }

  function excluirTransacao(id) {
    setTransacoes(transacoes.filter(t => t.id !== id));
  }

  const receitas = transacoes
    .filter(t => t.tipo === "receita")
    .reduce((total, t) => total + t.valor, 0);

  const despesas = transacoes
    .filter(t => t.tipo === "despesa")
    .reduce((total, t) => total + t.valor, 0);

  const saldo = receitas - despesas;

  return (
    <div className="container">
      <header>
        <h1>Dashboard Financeiro</h1>
        <p>Controle suas receitas e despesas</p>
      </header>

      <Resumo
        receitas={receitas}
        despesas={despesas}
        saldo={saldo}
      />

      <div className="painel">
        <Formulario adicionar={adicionarTransacao} />
        <Grafico transacoes={transacoes} />
      </div>

      <ListaTransacoes
        transacoes={transacoes}
        excluir={excluirTransacao}
      />
    </div>
  );
}

export default App;
