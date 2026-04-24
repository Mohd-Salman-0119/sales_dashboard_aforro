export const SalesMapping = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)] h-full flex flex-col">
      <h2 className="text-[16px] font-bold text-[#1E1E2D] mb-6">Sales Mapping by Country</h2>
      
      <div className="flex-1 flex items-center justify-center min-h-[160px]">
        <svg viewBox="0 0 400 200" className="w-full h-full max-w-[300px]">
          {/* Simplified Map Paths */}
          {/* North America */}
          <path d="M50,40 Q70,30 90,50 Q100,70 80,90 Q60,80 50,40" fill="#FFA500" />
          {/* South America */}
          <path d="M80,95 Q100,100 110,130 Q100,160 85,180 Q70,140 80,95" fill="#FF6B6B" />
          {/* Europe */}
          <path d="M180,30 Q210,20 230,40 Q220,60 190,55 Q170,40 180,30" fill="#5B5EF4" />
          {/* Africa */}
          <path d="M180,65 Q220,60 230,100 Q220,150 190,140 Q170,100 180,65" fill="#10B981" />
          {/* Asia */}
          <path d="M240,20 Q320,10 350,50 Q360,90 320,100 Q260,110 240,60" fill="#A78BFA" />
          {/* Australia */}
          <path d="M320,130 Q360,120 370,150 Q350,170 320,160 Q300,140 320,130" fill="#F59E0B" />
        </svg>
      </div>
    </div>
  );
};
