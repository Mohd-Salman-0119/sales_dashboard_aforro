import { NavLink } from 'react-router-dom';
import { 
  BarChart2, 
  Award, 
  ShoppingCart, 
  Package, 
  TrendingUp, 
  MessageSquare, 
  Settings, 
  LogOut 
} from 'lucide-react';

const NavItem = ({ to, icon: Icon, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-2.5 rounded-[10px] w-full transition-colors ${
          isActive
            ? 'bg-[#5B5EF4] text-white'
            : 'text-[#94A3B8] hover:bg-slate-50 hover:text-slate-600'
        }`
      }
    >
      <Icon size={18} />
      <span className="font-medium text-[15px]">{label}</span>
    </NavLink>
  );
};

export const Sidebar = () => {
  return (
    <aside className="w-[220px] bg-white h-screen fixed top-0 left-0 flex flex-col border-r border-slate-100 z-20">
      {/* Logo */}
      <div className="h-[70px] flex items-center px-6 gap-3">
        <div className="w-8 h-8 bg-[#5B5EF4] rounded-lg flex items-center justify-center text-white font-bold text-lg">
          A
        </div>
        <span className="text-[18px] font-bold text-[#1E1E2D]">Aforro</span>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 px-4 py-4 flex flex-col gap-3 overflow-y-auto">
        <NavItem to="/" icon={BarChart2} label="Dashboard" />
        <NavItem to="/leaderboard" icon={Award} label="Leaderboard" />
        <NavItem to="/customers" icon={ShoppingCart} label="Order" />
        <NavItem to="/products" icon={Package} label="Products" />
        <NavItem to="/sales-report" icon={TrendingUp} label="Sales Report" />
        <NavItem to="/messages" icon={MessageSquare} label="Messages" />
        <NavItem to="/settings" icon={Settings} label="Settings" />
        <NavItem to="/sign-out" icon={LogOut} label="Sign Out" />
      </nav>

      {/* Promo Card */}
      <div className="m-4 p-5 rounded-2xl bg-gradient-to-br from-[#5B5EF4] to-[#7C3AED] text-center flex flex-col items-center">
        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mb-3">
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
            <span className="text-[#5B5EF4] font-bold text-xs">A</span>
          </div>
        </div>
        <h4 className="text-white font-bold mb-1">Aforro Pro</h4>
        <p className="text-white/80 text-xs mb-4 leading-tight">
          Get access to all features on telumbas
        </p>
        <button className="bg-white text-[#5B5EF4] font-semibold text-sm px-6 py-2 rounded-lg w-full hover:bg-slate-50 transition-colors">
          Get Pro
        </button>
      </div>
    </aside>
  );
};
