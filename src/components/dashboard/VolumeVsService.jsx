import { BarChart, Bar, ResponsiveContainer, Tooltip } from 'recharts';
import { volumeVsServiceData } from '../../data/mockData';

export const VolumeVsService = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)] h-full flex flex-col">
      <h2 className="text-[16px] font-bold text-[#1E1E2D] mb-6">Volume vs Service Level</h2>
      
      <div className="flex-1 min-h-[160px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={volumeVsServiceData} margin={{ top: 10, right: 0, left: 0, bottom: 0 }} barGap={8}>
            <Tooltip 
              cursor={{ fill: 'transparent' }}
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
            />
            <Bar dataKey="volume" fill="#38BDF8" radius={[6, 6, 0, 0]} barSize={8} />
            <Bar dataKey="services" fill="#4CAF50" radius={[6, 6, 0, 0]} barSize={8} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 flex items-center justify-center gap-8 border-t border-slate-100 pt-4">
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 text-[12px] text-[#94A3B8] mb-1">
            <div className="w-2 h-2 rounded-full bg-[#38BDF8]"></div>
            <span>Volume</span>
          </div>
          <span className="text-[14px] font-bold text-[#1E1E2D]">1,135</span>
        </div>
        
        <div className="w-px h-8 bg-slate-100"></div>

        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 text-[12px] text-[#94A3B8] mb-1">
            <div className="w-2 h-2 rounded-full bg-[#4CAF50]"></div>
            <span>Services</span>
          </div>
          <span className="text-[14px] font-bold text-[#1E1E2D]">635</span>
        </div>
      </div>
    </div>
  );
};
