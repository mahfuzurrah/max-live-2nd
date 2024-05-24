import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

export default function PieChart() {
  const options: ApexOptions = {
    chart: {
      width: 380,
      type: "donut",
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
    legend: {
      position: "right",
      offsetY: 0,
      height: 230,
      labels: {
        colors: ["#4153f6", "#a9c6ff"]
      },
    },
    labels: [
      '<div class="chart_num">Active models <span>12</span></div>',
      '<div class="chart_num">Deactivated models<span>2</span></div>',
    ],
    colors: ["#4153F6", "#A9C6FF"],
  };

  return (
    <div className="chart-wrap">
      <div id="chart">
        <ReactApexChart options={options} series={[12, 2]} type="donut" />
      </div>
    </div>
  );
};

