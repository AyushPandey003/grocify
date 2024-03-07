import CustomDataTable from "@/components/backend/CustomDataTable"
import DashboardCharts from "@/components/backend/DashboardCharts"
import LargeCards from "@/components/backend/LargeCards"
import SmallCards from "@/components/backend/SmallCards"
import Heading from "@/components/backend/heading"
import React from 'react'

export default function page() {
  return (
    <div>
        <Heading title="Dashboard Overview"/>
        {/* Large Cards */}
        <LargeCards/>
        {/*Small Cards*/}
        <SmallCards/>
        {/*Charts*/}
        <DashboardCharts/>
        {/*Table*/}
        <CustomDataTable/>

    </div>
  )
}
