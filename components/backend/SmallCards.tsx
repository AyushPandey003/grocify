import React from 'react'
import SmallCard from './SmallCard';
import { CheckCheck, Loader2, RefreshCcw, ShoppingCart } from 'lucide-react';
export default function SmallCards() {
  const orderStatus = [
    {
    title: "Total No. Orders", 
    sales: 150, 
    iconbg: "bg-green-600",
    icon:ShoppingCart
    },
    {
      title: "Orders Pending", 
      sales: 100, 
      iconbg: "bg-blue-600",
      icon:Loader2
    },  
    {
      title: " order Processing ", 
      sales: 200, 
      iconbg: "bg-orange-600",
      icon:RefreshCcw
    },
    {
      title: "Orders Deliverd", 
      sales: 50, 
      iconbg: "bg-purple-600",
      icon:CheckCheck
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid cols-3 lg:grid-cols-4 gap-4 py-8">
    { orderStatus.map((item, inde) => {
    return <SmallCard key={inde} data={item}/>;
    })}
    </div>
  )
}

