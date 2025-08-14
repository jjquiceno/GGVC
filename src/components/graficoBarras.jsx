import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const colors = ['#5c6d56', '#0c2001', '#3d5421', '#5c6d56'];

export default function GraficoBarras({data}) {
  return (
    <div className="w-[50%] h-[50vh] p-4 m-10">
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
