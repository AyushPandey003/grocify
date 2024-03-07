'use client';
import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

export default function WeeklySalesCharts() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
    },
  };
  const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const data = {
    labels,
    datasets: [
      {
        label: 'Sales',
        data: [100, 200, 150, 250, 180, 300, 220], // Replace with actual sales data
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  const tabs = [
    {
      title: 'Sales',
      type: 'sales',
      data: {
        labels,
        datasets: [
          {
            label: 'Sales',
            data: [100, 200, 150, 250, 180, 300, 220], // Replace with actual sales data
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
      },
    },
    {
      title: 'Orders',
      type: 'orders',
      data: {
        labels,
        datasets: [
          {
            label: 'Orders',
            data: [100, 52, 150, 250, 180, 300, 220], // Replace with actual sales data
            borderColor: 'rgb(0, 137, 132)',
            backgroundColor: 'rgba(0, 137, 132, 0.5)',
          },
        ],
      },
    },
  ];
  const [chartToDisplay, setChartToDisplay] = useState(tabs[0].type);
  return (
    <div className='bg-slate-50 dark:bg-slate-700 p-8 rounded-lg'>
      <h2 className='text-xl font-bold mb-4 text-slate-700 dark:text-slate-50'>Weekly Sales Chart</h2>
      <div className='p-4'>
        {/* Tabs */}
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px">
            {tabs.map((tab, index) => (
              <li className="me-2" key={index}>
                <button
                  onClick={() => setChartToDisplay(tab.type)}
                  className={
                    chartToDisplay === tab.type
                      ? "inline-block p-4 text-orange-600 border-b-2 border-orange-600 rounded-t-lg active dark:text-orange-500 dark:border-orange-500"
                      : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-300 hover:border-gray-100 dark:hover-text-gray-100"
                  }
                >
                  {tab.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {/* Content */}
        {tabs.map((tab, index) => {
          if (chartToDisplay === tab.type) {
            const updatedOptions = {
              ...options,
              plugins: {
                ...options.plugins,
                legend: {
                  ...options.plugins.legend,
                  position: 'top', // Replace 'top' with the desired position
                },
              },
            };
            return <Line key={index} options={updatedOptions} data={tab.data} />;
          }
          return null;
        })}
      </div>
    </div>
  );
}