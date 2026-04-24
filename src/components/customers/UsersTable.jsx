import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';

// Helper to get initials and color based on name hash
const getAvatarStyle = (name) => {
  const initials = name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  const hash = name.split('').reduce((acc, char) => char.charCodeAt(0) + ((acc << 5) - acc), 0);
  const colors = ['#5B5EF4', '#FF6B6B', '#4CAF50', '#F59E0B', '#A78BFA', '#10B981', '#38BDF8'];
  const color = colors[Math.abs(hash) % colors.length];
  return { initials, color };
};

export const UsersTable = ({ users, sortConfig, onSort }) => {
  const renderSortIcon = () => {
    if (!sortConfig || sortConfig.key !== 'name') return <ArrowUpDown size={14} className="ml-1" />;
    if (sortConfig.direction === 'asc') return <ArrowUp size={14} className="ml-1" />;
    return <ArrowDown size={14} className="ml-1" />;
  };

  return (
    <div className="bg-white rounded-[16px] shadow-[0_2px_12px_rgba(0,0,0,0.06)] overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#F8FAFC]">
              <th 
                className="py-4 px-6 text-[13px] font-medium text-[#64748B] uppercase tracking-[0.5px] cursor-pointer hover:bg-slate-100 transition-colors"
                onClick={() => onSort('name')}
              >
                <div className="flex items-center">
                  NAME
                  {renderSortIcon()}
                </div>
              </th>
              <th className="py-4 px-6 text-[13px] font-medium text-[#64748B] uppercase tracking-[0.5px]">EMAIL</th>
              <th className="py-4 px-6 text-[13px] font-medium text-[#64748B] uppercase tracking-[0.5px]">COMPANY NAME</th>
              <th className="py-4 px-6 text-[13px] font-medium text-[#64748B] uppercase tracking-[0.5px]">CITY</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              const { initials, color } = getAvatarStyle(user.name);
              return (
                <tr key={user.id} className="h-[56px] border-b border-[#F1F5F9] last:border-0 hover:bg-[#F8FAFC] transition-colors">
                  <td className="px-6">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-9 h-9 rounded-full flex items-center justify-center text-white text-[14px] font-bold shrink-0"
                        style={{ backgroundColor: color }}
                      >
                        {initials}
                      </div>
                      <span className="text-[14px] font-bold text-[#1E1E2D] whitespace-nowrap">
                        {user.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 text-[14px] text-[#64748B] whitespace-nowrap">
                    {user.email}
                  </td>
                  <td className="px-6 text-[14px] text-[#1E1E2D] whitespace-nowrap">
                    {user.company.name}
                  </td>
                  <td className="px-6">
                    <span className="inline-block bg-[#EEF2FF] text-[#5B5EF4] text-[12px] font-medium px-3 py-1 rounded-[20px] whitespace-nowrap">
                      {user.address.city}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
