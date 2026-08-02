import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

// Mock data for the last 30 days
const data = Array.from({ length: 30 }, (_, i) => ({
  date: new Date(new Date().setDate(new Date().getDate() - (29 - i))).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
  hours: Math.floor(Math.random() * 8) + 1,
}));

export const StudyTimeChart: React.FC = () => {
  return (
    <div className="h-64 w-full bg-[#08151c] p-4 rounded-2xl border border-[#1b3b4a]">
      <h4 className="text-xs font-bold text-[#789cae] uppercase mb-4">Study Trends (Last 30 Days)</h4>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#22d3ee" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#183646" />
          <XAxis dataKey="date" stroke="#597e90" fontSize={10} tickLine={false} axisLine={false} />
          <YAxis stroke="#597e90" fontSize={10} tickLine={false} axisLine={false} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#0c1a24', border: '1px solid #1b3b4a', borderRadius: '8px' }}
            itemStyle={{ color: '#22d3ee' }}
          />
          <Area type="monotone" dataKey="hours" stroke="#22d3ee" fillOpacity={1} fill="url(#colorHours)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
