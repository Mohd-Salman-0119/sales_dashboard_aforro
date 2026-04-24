import { AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts';
import { customerSatisfactionData } from '../../data/mockData';

export const CustomerSatisfaction = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)] h-full flex flex-col">
      <h2 className="text-[16px] font-bold text-[#1E1E2D] mb-4">Customer Satisfaction</h2>
      
      <div className="flex-1 min-h-[180px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={customerSatisfactionData} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorLast" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10B981" stopOpacity={0.08}/>
                <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorThis" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#38BDF8" stopOpacity={0.15}/>
                <stop offset="95%" stopColor="#38BDF8" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <Tooltip 
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
            />
            <Area 
              type="monotone" 
              dataKey="lastMonth" 
              stroke="#10B981" 
              strokeDasharray="4 4"
              fillOpacity={1} 
              fill="url(#colorLast)" 
              strokeWidth={2}
              dot={{ r: 4, fill: '#10B981', strokeWidth: 2, stroke: '#fff' }}
              activeDot={{ r: 6 }}
            />
            <Area 
              type="monotone" 
              dataKey="thisMonth" 
              stroke="#38BDF8" 
              fillOpacity={1} 
              fill="url(#colorThis)" 
              strokeWidth={2}
              dot={{ r: 4, fill: '#38BDF8', strokeWidth: 2, stroke: '#fff' }}
              activeDot={{ r: 6 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
        <div className="flex flex-col items-center flex-1">
          <div className="flex items-center gap-1.5 text-[12px] text-[#94A3B8]">
            <div className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></div>
            <span>Last Month</span>
          </div>
          <span className="text-[14px] font-bold text-[#1E1E2D] mt-1">$3,004</span>
        </div>
        <div className="w-px h-8 bg-slate-100"></div>
        <div className="flex flex-col items-center flex-1">
          <div className="flex items-center gap-1.5 text-[12px] text-[#94A3B8]">
            <div className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]"></div>
            <span>This Month</span>
          </div>
          <span className="text-[14px] font-bold text-[#1E1E2D] mt-1">$4,504</span>
        </div>
      </div>
    </div>
  );
};
