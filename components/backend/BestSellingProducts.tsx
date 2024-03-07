'use client';
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
export default function BestSellingProductsCharts() {
  const data = {
    labels: ['Cabbage', 'Watermelon', 'Brocolli', 'Maize'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5],
        backgroundColor: [
          'rgba(0 ,0 , 255 , 0.7)',
          'rgba(255,0,221,0.7)',
          'rgba(2,139,71,0.7)',
          'rgba(0, 0, 0, 0.7)',
        ],
        borderColor: [
          'rgba(255, 255, 255, 1)', 
          'rgba(255, 255, 255, 1)', 
          'rgba(255, 255, 255, 1)', 
          'rgba(255, 255, 255, 1)', 
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className='bg-slate-50 dark:bg-slate-700 p-8 rounded-lg'>
      <h2 className='text-xl font-bold mb-4 text-slate-700 dark:text-slate-50'>ProductsCharts</h2>
      <div className='p-4'>
        <Pie data={data} />
      </div>
    </div>
  )
}
