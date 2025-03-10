import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const LowSeverityChart: React.FC = () => {
  const [data, setData] = useState<{ severities: number; time: number }[]>([]);
  const [totalSeverity, setTotalSeverity] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) => {
        const newTime = prevData.length > 0 ? prevData[prevData.length - 1].time + 1 : 0;
        const newSeverity = Math.floor(Math.random() * 11); // Random severity (0-10)

        const updatedData = [...prevData, { time: newTime, severities: newSeverity}];

        setTotalSeverity(updatedData.reduce((sum, point) => sum + point.severities, 0));
        return updatedData.slice(-60);
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const options: ApexOptions = {
    chart: {
      type: "area",
      animations: { enabled: false },
      toolbar: { show: false },
      zoom: { enabled: false },
      background: "transparent",
      sparkline: { enabled: true },
    },
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false },
    },
    yaxis: {
      max: 15,
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false },
    },
    stroke: { curve: "straight", width: 1 },
    colors: ["#00ff00"],
    grid: { show: false },
    dataLabels: { 
        enabled: false 
      },
    tooltip: { enabled: false },
  };

  const series = [
    { name: "Low Severity", data: data.map(d => d.severities)}
  ]
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] sm:px-3 sm:pt-3 pr-3 pb-3 flex flex-col">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">Low Severity</h3>
      <h4 className="text-lg font-semibold text-gray-800 dark:text-white/90">{totalSeverity}</h4>
      <div className="flex-1 w-full h-full">
        <Chart
          options={options}
          series={series}
          type="area"
          height={100}
          width="100%"
        />
      </div>
    </div>
  );
};

export default LowSeverityChart;
