import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function GraficoLineas({ data }) {
  return (
    <div className="w-[30vw] h-70 p-4 text-xs">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="edad" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="peso"
            stroke="#3d5421"
            strokeWidth={3}
            dot={{ r: 2, stroke: '#0c2001', strokeWidth: 2, fill: '#5c6d56' }}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

