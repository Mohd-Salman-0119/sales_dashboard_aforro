import { BarChart, Bar, XAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { targetVsRealityData } from '../../data/mockData';
import { ShoppingBag, Globe } from 'lucide-react';

export const TargetVsReality = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)] h-full flex flex-col">
      <h2 className="text-[16px] font-bold text-[#1E1E2D] mb-6">Target vs Reality</h2>
      
      <div className="flex-1 min-h-[160px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={targetVsRealityData} margin={{ top: 10, right: 0, left: 0, bottom: 0 }} barGap={4}>
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 10, fill: '#94A3B8' }} 
              dy={10}
            />
            <Tooltip 
              cursor={{ fill: 'transparent' }}
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
            />
            <Bar dataKey="reality" fill="#4CAF50" radius={[4, 4, 0, 0]} barSize={10} />
            <Bar dataKey="target" fill="#FFC107" radius={[4, 4, 0, 0]} barSize={10} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#F0FFF4] flex items-center justify-center">
              <ShoppingBag size={18} className="text-[#4CAF50]" />
            </div>
            <div>
              <p className="text-[14px] font-bold text-[#1E1E2D] leading-none mb-1">Reality Sales</p>
              <p className="text-[12px] text-[#94A3B8]">Global</p>
            </div>
          </div>
          <span className="text-[14px] font-bold text-[#4CAF50]">8,823</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FFF8E1] flex items-center justify-center">
              <Globe size={18} className="text-[#FFC107]" />
            </div>
            <div>
              <p className="text-[14px] font-bold text-[#1E1E2D] leading-none mb-1">Target Sales</p>
              <p className="text-[12px] text-[#94A3B8]">Commercial</p>
            </div>
          </div>
          <span className="text-[14px] font-bold text-[#FFC107]">12,122</span>
        </div>
      </div>
    </div>
  );
};
