import { Upload } from 'lucide-react';
import { BarChart2, ShoppingCart, Package, Users } from 'lucide-react';
import { todaysSalesData } from '../../data/mockData';

const iconMap = {
  sales: BarChart2,
  order: ShoppingCart,
  product: Package,
  customers: Users
};

export const TodaysSales = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)] h-full flex flex-col">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-[16px] font-bold text-[#1E1E2D]">Today's Sales</h2>
          <p className="text-[12px] text-[#94A3B8] mt-1">Sales Summery</p>
        </div>
        <button className="flex items-center gap-1.5 px-3 py-1.5 border border-[#E2E8F0] rounded-lg text-[12px] font-medium text-[#1E1E2D] hover:bg-slate-50 transition-colors">
          <Upload size={14} />
          <span>Export</span>
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-1">
        {todaysSalesData.map((item) => {
          const Icon = iconMap[item.id];
          return (
            <div key={item.id} className={`${item.bgColor} rounded-xl p-4 flex flex-col justify-between`}>
              <div className={`${item.iconBgColor} w-10 h-10 rounded-full flex items-center justify-center mb-4`}>
                <Icon size={20} className={item.iconColor} />
              </div>
              <div>
                <h3 className="text-[28px] font-extrabold text-[#1E1E2D] leading-none mb-1">{item.value}</h3>
                <p className="text-[13px] text-[#64748B] mb-2">{item.title}</p>
                <p className={`text-[12px] ${item.trendUp ? 'text-[#4CAF50]' : 'text-[#EF4444]'}`}>
                  {item.trend}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
