import { TodaysSales } from '../components/dashboard/TodaysSales';
import { VisitorInsights } from '../components/dashboard/VisitorInsights';
import { TotalRevenue } from '../components/dashboard/TotalRevenue';
import { CustomerSatisfaction } from '../components/dashboard/CustomerSatisfaction';
import { TargetVsReality } from '../components/dashboard/TargetVsReality';
import { TopProducts } from '../components/dashboard/TopProducts';
import { SalesMapping } from '../components/dashboard/SalesMapping';
import { VolumeVsService } from '../components/dashboard/VolumeVsService';

export const Dashboard = () => {
  return (
    <div className="flex flex-col gap-6 max-w-[1400px] mx-auto">
      {/* Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7">
          <TodaysSales />
        </div>
        <div className="lg:col-span-5">
          <VisitorInsights />
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-5">
          <TotalRevenue />
        </div>
        <div className="lg:col-span-4">
          <CustomerSatisfaction />
        </div>
        <div className="lg:col-span-3">
          <TargetVsReality />
        </div>
      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-5">
          <TopProducts />
        </div>
        <div className="lg:col-span-4">
          <SalesMapping />
        </div>
        <div className="lg:col-span-3">
          <VolumeVsService />
        </div>
      </div>
    </div>
  );
};
