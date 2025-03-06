import ComponentCard from "../components/common/ComponentCard";
import PageBreadcrumb from "../components/common/PageBreadCrumb";
import PageMeta from "../components/common/PageMeta";
import NetworkThroughput from "../instruments/NetworkThroughput";

export default function HomePage() {
  return (
  <div>
      <PageMeta
        title=""
        description=""
      />
      <PageBreadcrumb pageTitle="Dashboard Overview" navigation="Dashboard"/>
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 xl:col-span-5">
          <NetworkThroughput/>
        </div>

        <div className="col-span-12 space-y-6 xl:col-span-7">

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
