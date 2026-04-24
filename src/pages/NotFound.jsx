import { Link } from 'react-router-dom';
import { FileQuestion, ArrowLeft } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] max-w-[600px] mx-auto text-center">
      <div className="w-24 h-24 bg-white rounded-[24px] shadow-[0_2px_12px_rgba(0,0,0,0.06)] flex items-center justify-center mb-6">
        <FileQuestion size={48} className="text-[#5B5EF4]" />
      </div>
      <h1 className="text-[32px] font-extrabold text-[#1E1E2D] mb-2">Page Not Found</h1>
      <p className="text-[16px] text-[#64748B] mb-8">
        Oops! The page you are looking for doesn't exist or has been moved.
      </p>
      <Link 
        to="/" 
        className="flex items-center gap-2 bg-[#5B5EF4] text-white px-6 py-3 rounded-[12px] font-semibold hover:bg-[#4a4ce0] transition-colors shadow-[0_4px_12px_rgba(91,94,244,0.3)]"
      >
        <ArrowLeft size={18} />
        <span>Back to Dashboard</span>
      </Link>
    </div>
  );
};
