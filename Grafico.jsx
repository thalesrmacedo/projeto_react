
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const cores = [
  "#6366f1", "#f97316", "#10b981",
  "#ec4899", "#0ea5e9", "#eab308", "#8b5cf6"
];

function Grafico({ transacoes }) {
  const despesas = transacoes.filter(t => t.tipo === "despesa");

  const categorias = {};

  despesas.forEach(t => {
    categorias[t.categoria] =
      (categorias[t.categoria] || 0) + t.valor;
  });

  const dados = Object.entries(categorias).map(
    ([name, value]) => ({ name, value })
  );

  return (
    <section className="bloco">
      <h2>Despesas por Categoria</h2>

      {dados.length === 0 ? (
        <p>Nenhuma despesa cadastrada.</p>
      ) : (
        <div className="grafico">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={dados}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={95}
                label
              >
                {dados.map((item, index) => (
                  <Cell
                    key={item.name}
                    fill={cores[index % cores.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                formatter={valor =>
                  Number(valor).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                  })
                }
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </section>
  );
}

export default Grafico;
