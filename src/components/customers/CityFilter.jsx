import { ChevronDown } from 'lucide-react';

export const CityFilter = ({ cities, value, onChange }) => {
  return (
    <div className="relative w-[180px]">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none bg-white border border-[#E2E8F0] rounded-[10px] py-[10px] pl-4 pr-10 text-[14px] text-[#1E1E2D] focus:outline-none focus:border-[#5B5EF4] focus:ring-1 focus:ring-[#5B5EF4] cursor-pointer"
      >
        <option value="">All Cities</option>
        {cities.map(city => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
        <ChevronDown size={16} className="text-[#94A3B8]" />
      </div>
    </div>
  );
};
