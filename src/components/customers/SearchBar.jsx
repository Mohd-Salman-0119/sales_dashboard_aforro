import { Search } from 'lucide-react';

export const SearchBar = ({ value, onChange }) => {
  return (
    <div className="relative w-[320px]">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Search size={18} className="text-[#94A3B8]" />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-white border border-[#E2E8F0] rounded-[10px] py-[10px] pl-10 pr-4 text-[14px] text-[#1E1E2D] placeholder-[#94A3B8] focus:outline-none focus:border-[#5B5EF4] focus:ring-1 focus:ring-[#5B5EF4] transition-all"
        placeholder="Search users..."
      />
    </div>
  );
};
