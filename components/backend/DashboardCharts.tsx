import React from 'react';
import BestSellingProductsCharts from './BestSellingProducts';
import WeeklySalesCharts from './weeklySalesCharts';
export default function DashboardCharts() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 '>
        <WeeklySalesCharts/>
        <BestSellingProductsCharts/>
    </div>
  );
}
