import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { totalRevenueData } from '../../data/mockData';

export const TotalRevenue = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)] h-full flex flex-col">
      <h2 className="text-[16px] font-bold text-[#1E1E2D] mb-6">Total Revenue</h2>
      
      <div className="flex-1 min-h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={totalRevenueData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }} barGap={6}>
            <CartesianGrid vertical={false} stroke="#F1F5F9" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 10, fill: '#94A3B8' }} 
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 10, fill: '#94A3B8' }}
              ticks={[0, 5000, 10000, 15000, 20000, 25000]}
              tickFormatter={(value) => value === 0 ? '0' : `${value/1000}k`}
            />
            <Tooltip 
              cursor={{ fill: 'transparent' }}
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
            />
            <Bar dataKey="online" fill="#5B5EF4" radius={[6, 6, 0, 0]} barSize={12} />
            <Bar dataKey="offline" fill="#38BDF8" radius={[6, 6, 0, 0]} barSize={12} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#5B5EF4]"></div>
          <span className="text-[11px] text-[#64748B]">Online Sales</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#38BDF8]"></div>
          <span className="text-[11px] text-[#64748B]">Offline Sales</span>
        </div>
      </div>
    </div>
  );
};
