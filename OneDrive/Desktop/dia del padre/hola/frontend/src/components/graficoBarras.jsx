// src/components/BarChartComponent.jsx
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { mes: 'Enero', litros: 20 },
  { mes: 'Febrero', litros: 32 },
  { mes: 'Marzo', litros: 23 },
  { mes: 'Abril', litros: 40 },
  { mes: 'Mayo', litros: 35},
  { mes: 'Junio', litros: 28 },
];

const colors = ['#5c6d56', '#0c2001', '#3d5421', '#5c6d56'];

export default function GraficoBarras() {
  return (
    <div className="w-full h-64 p-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="mes" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="litros">
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
                style={{ transition: 'opacity 0.3s' }}
                className="hover:opacity-70"
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
