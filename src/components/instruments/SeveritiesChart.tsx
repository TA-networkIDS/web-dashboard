import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import HighSeverityChart from "./HighSeverityChart";
import MediumSeverityChart from "./MediumSeverityChart";
import LowSeverityChart from "./LowSeverityChart";

const SeveritiesChart: React.FC = () => {
  const [highData, setHighData] = useState<{ time: number; severity: number }[]>([]);
  const [mediumData, setMediumData] = useState<{ time: number; severity: number }[]>([]);
  const [lowData, setLowData] = useState<{ time: number; severity: number }[]>([]);
  const [totalLow, setTotalLow] = useState(0);
  const [totalMed, setTotalMed] = useState(0);
  const [totalHigh, setTotalHigh] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighData((prev) => updateData(prev, 3)); // Max severity 3
      setMediumData((prev) => updateData(prev, 7)); // Max severity 7
      setLowData((prev) => updateData(prev, 11)); // Max severity 11
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const updateData = (prevData: { time: number; severity: number }[], maxSeverity: number) => {
    const newTime = prevData.length > 0 ? prevData[prevData.length - 1].time + 1 : 0;
    const newSeverity = Math.floor(Math.random() * maxSeverity);
    const updatedData = [...prevData, { time: newTime, severity: newSeverity }];
    return updatedData.slice(-60);
  };

  const series = [
    {
      name: "High Severity",
      data: highData.map((d) => ({ x: d.time, y: d.severity })),
    },
    {
      name: "Medium Severity",
      data: mediumData.map((d) => ({ x: d.time, y: d.severity })),
    },
    {
      name: "Low Severity",
      data: lowData.map((d) => ({ x: d.time, y: d.severity })),
    },
  ];

  const options : ApexOptions = {
    chart: {
      type: "scatter",
      height: "100%",
      animations: { enabled: false },
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    xaxis: {
      title: { text: "Time" },
      tickAmount: 3,
      labels: { show: false },
      categories: lowData.map((d) => d.time.toString()),
    },
    yaxis: {
      title: { text: "Alerts" },
      max: 12,
    },
    legend: { position: "top" },
    colors: ["#FF0000", "#FFA500", "#00FF00"], 
    

  };

  return (
    <>
        <div className="col-span-12 space-y-6 xl:col-span-7">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6">
                <HighSeverityChart />
                <MediumSeverityChart />
                <LowSeverityChart />
            </div>
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6 flex flex-col">
              <div className="flex-1 w-full h-full">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">Total Alerts Over Time</h3>
                <Chart options={options} series={series} type="scatter" height={280} width="100%"/>
              </div>
            </div>
        </div>
    </>
  );
};

export default SeveritiesChart;
