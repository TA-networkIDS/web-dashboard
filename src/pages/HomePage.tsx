import ComponentCard from "../components/common/ComponentCard";
import PageBreadcrumb from "../components/common/PageBreadCrumb";
import PageMeta from "../components/common/PageMeta";
import TimePeriodSelection from "../components/common/TimePeriodSelection";
import EcommerceMetrics from "../components/instruments/EcommerceMetrics";
import HighSeverityChart from "../components/instruments/HighSeverityChart";
import LowSeverityChart from "../components/instruments/LowSeverityChart";
import MediumSeverityChart from "../components/instruments/MediumSeverityChart";
import MonthlySalesChart from "../components/instruments/MonthlySalesChart";
import NetworkThroughput from "../components/instruments/NetworkThroughput";
import SeveritiesChart from "../components/instruments/SeveritiesChart";

export default function HomePage() {
  return (
  <div>
      <PageMeta
        title=""
        description=""
      />
      <PageBreadcrumb pageTitle="Dashboard Overview" navigation="Dashboard"/>
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-6 xl:py-6">
      <div className="flex grid grid-cols-12">
        <div className="shrink col-span-8 col-end-10"></div>
        <div className="flex-none col-span-4 col-start-10">
          <TimePeriodSelection/>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 md:gap-6 pt-6">
        <div className="col-span-12 xl:col-span-5">
          <NetworkThroughput/>
        </div>

        <div className="col-span-12 space-y-6 xl:col-span-7">
          <SeveritiesChart/>
        </div>

        <div className="col-span-12 xl:col-span-5">

        </div>

        <div className="col-span-12">

        </div>

        <div className="col-span-12 xl:col-span-7">

        </div>
      </div>
      </div>
    </div>
  );
}
