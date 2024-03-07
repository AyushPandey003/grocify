import { Layers } from 'lucide-react'
import React from 'react'
// import { CardBody, CardContainer, CardItem } from "../ui/3d-card.tsx";
export default function LargeCard({data}:{data:{ color: string; period: string; sales: number }}) {
  return (
    <div className={`rounded-lg text-white px-4 shadow-md py-8 flex-items-center flex-col gap-2 ${data.color} `}>
        <Layers/>
        <h4>{data.period}</h4>
        <h2 className='lg:text-xl text-2xl truncate overflow-hidden'>Rs.{data.sales}</h2>
    </div>
  )
}
