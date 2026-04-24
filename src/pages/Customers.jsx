import { useState, useMemo } from 'react';
import { useUsers } from '../hooks/useUsers';
import { SearchBar } from '../components/customers/SearchBar';
import { CityFilter } from '../components/customers/CityFilter';
import { UsersTable } from '../components/customers/UsersTable';
import { ArrowUpDown, AlertCircle, SearchX, ArrowUp, ArrowDown } from 'lucide-react';

export const Customers = () => {
  const { users, loading, error, refetch } = useUsers();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [sortConfig, setSortConfig] = useState(null); // null | { key: 'name', direction: 'asc' | 'desc' }

  const handleSort = (key) => {
    if (sortConfig && sortConfig.key === key) {
      if (sortConfig.direction === 'asc') {
        setSortConfig({ key, direction: 'desc' });
      } else {
        setSortConfig(null);
      }
    } else {
      setSortConfig({ key, direction: 'asc' });
    }
  };

  const cities = useMemo(() => {
    if (!users) return [];
    const uniqueCities = [...new Set(users.map(u => u.address.city))];
    return uniqueCities.sort();
  }, [users]);

  const filteredAndSortedUsers = useMemo(() => {
    if (!users) return [];
    
    let result = [...users];

    // Search filter
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      result = result.filter(user => 
        user.name.toLowerCase().includes(lowerQuery) || 
        user.email.toLowerCase().includes(lowerQuery)
      );
    }

    // City filter
    if (selectedCity) {
      result = result.filter(user => user.address.city === selectedCity);
    }

    // Sort
    if (sortConfig !== null) {
      result.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }

    return result;
  }, [users, searchQuery, selectedCity, sortConfig]);

  const SortButton = () => {
    const handleToggleSort = () => {
      handleSort('name');
    };
    
    let Icon = ArrowUpDown;
    if (sortConfig && sortConfig.direction === 'asc') Icon = ArrowUp;
    else if (sortConfig && sortConfig.direction === 'desc') Icon = ArrowDown;

    return (
      <button 
        onClick={handleToggleSort}
        className="w-10 h-10 rounded-[10px] border border-[#E2E8F0] flex items-center justify-center bg-white text-[#64748B] hover:bg-slate-50 transition-colors shrink-0"
        title="Sort by Name"
      >
        <Icon size={18} />
      </button>
    );
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh]">
        <div className="w-10 h-10 border-4 border-slate-200 border-t-[#5B5EF4] rounded-full animate-spin mb-4"></div>
        <p className="text-[14px] text-[#64748B]">Fetching users...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col items-center text-center max-w-sm w-full">
          <AlertCircle size={48} className="text-[#EF4444] mb-4" />
          <h2 className="text-[16px] font-bold text-[#1E1E2D] mb-2">Failed to load users</h2>
          <p className="text-[14px] text-[#64748B] mb-6">{error}</p>
          <button 
            onClick={refetch}
            className="bg-[#5B5EF4] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#4a4ce0] transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1400px] mx-auto">
      {/* Controls Row */}
      <div className="bg-white rounded-xl p-4 mb-5 flex flex-row items-center gap-3 shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <CityFilter cities={cities} value={selectedCity} onChange={setSelectedCity} />
        <SortButton />
        <div className="ml-auto text-[13px] text-[#64748B]">
          Showing {filteredAndSortedUsers.length} of {users.length} users
        </div>
      </div>

      {/* Table Area */}
      {filteredAndSortedUsers.length > 0 ? (
        <UsersTable 
          users={filteredAndSortedUsers} 
          sortConfig={sortConfig} 
          onSort={handleSort} 
        />
      ) : (
        <div className="bg-white rounded-[16px] shadow-[0_2px_12px_rgba(0,0,0,0.06)] py-16 flex flex-col items-center justify-center">
          <SearchX size={40} className="text-[#94A3B8] mb-4" />
          <p className="text-[15px] text-[#64748B] mb-2">
            No users found for '{searchQuery}'
          </p>
          <button 
            onClick={() => { setSearchQuery(''); setSelectedCity(''); }}
            className="text-[#5B5EF4] text-[14px] font-medium hover:underline"
          >
            Clear search
          </button>
        </div>
      )}
    </div>
  );
};
