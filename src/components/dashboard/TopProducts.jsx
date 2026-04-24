import { topProductsData } from '../../data/mockData';

export const TopProducts = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)] h-full flex flex-col">
      <h2 className="text-[16px] font-bold text-[#1E1E2D] mb-4">Top Products</h2>
      
      <div className="flex-1 overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="pb-4 text-[13px] font-medium text-[#94A3B8] border-b border-slate-100 w-10">#</th>
              <th className="pb-4 text-[13px] font-medium text-[#94A3B8] border-b border-slate-100">Name</th>
              <th className="pb-4 text-[13px] font-medium text-[#94A3B8] border-b border-slate-100 w-1/3">Popularity</th>
              <th className="pb-4 text-[13px] font-medium text-[#94A3B8] border-b border-slate-100 w-16 text-right">Sales</th>
            </tr>
          </thead>
          <tbody>
            {topProductsData.map((product) => (
              <tr key={product.id} className="border-b border-slate-50 last:border-0">
                <td className="py-4 text-[13px] text-[#64748B]">{product.id}</td>
                <td className="py-4 text-[14px] text-[#1E1E2D] whitespace-nowrap">{product.name}</td>
                <td className="py-4 pr-4">
                  <div className="w-full h-[6px] bg-[#F1F5F9] rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full" 
                      style={{ width: `${product.popularity}%`, backgroundColor: product.color }}
                    ></div>
                  </div>
                </td>
                <td className="py-4 text-right">
                  <span 
                    className="inline-block px-2 py-1 rounded-[6px] text-[12px] font-bold"
                    style={{ 
                      backgroundColor: `${product.color}15`, 
                      color: product.color,
                      border: `1px solid ${product.color}30`
                    }}
                  >
                    {product.popularity}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
