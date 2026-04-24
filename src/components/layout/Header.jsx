import { useLocation } from 'react-router-dom';
import { Search, Bell, ChevronDown } from 'lucide-react';

export const Header = () => {
  const location = useLocation();
  const title = location.pathname === '/customers' ? 'Customers' : 'Dashboard';

  return (
    <header className="h-[70px] bg-white w-full flex flex-row items-center justify-between px-6 sticky top-0 z-10 border-b border-slate-50">
      <div className="flex-1">
        <h1 className="text-[28px] font-extrabold text-[#1E1E2D]">{title}</h1>
      </div>

      <div className="flex-none flex justify-center items-center">
        <div className="relative w-[420px]">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search size={18} className="text-[#94A3B8]" />
          </div>
          <input
            type="text"
            className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-full py-2.5 pl-11 pr-4 text-[14px] text-[#1E1E2D] placeholder-[#94A3B8] focus:outline-none focus:border-[#5B5EF4] focus:ring-1 focus:ring-[#5B5EF4] transition-all"
            placeholder="Search here..."
          />
        </div>
      </div>

      <div className="flex-1 flex justify-end items-center gap-6">
        <div className="flex items-center gap-2 cursor-pointer hover:bg-slate-50 p-2 rounded-lg transition-colors">
          <span className="text-lg">🇺🇸</span>
          <span className="text-sm font-medium text-[#1E1E2D]">Eng (US)</span>
          <ChevronDown size={16} className="text-[#94A3B8]" />
        </div>

        <div className="relative cursor-pointer w-10 h-10 flex items-center justify-center hover:bg-slate-50 rounded-full transition-colors">
          <Bell size={22} className="text-[#64748B]" />
          <div className="absolute top-2 right-2 w-2 h-2 bg-[#EF4444] rounded-full border-2 border-white"></div>
        </div>

        <div className="flex items-center gap-3 cursor-pointer hover:bg-slate-50 p-1.5 rounded-xl transition-colors">
          <img 
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mustiq&backgroundColor=e2e8f0" 
            alt="User avatar" 
            className="w-10 h-10 rounded-full bg-slate-200"
          />
          <div className="flex flex-col">
            <span className="text-[14px] font-bold text-[#1E1E2D] leading-tight">Mustiq</span>
            <span className="text-[12px] text-[#64748B]">Admin</span>
          </div>
          <ChevronDown size={16} className="text-[#94A3B8] ml-1" />
        </div>
      </div>
    </header>
  );
};
