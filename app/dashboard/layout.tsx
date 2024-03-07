import React from 'react';
import Sidebar from '@/components/backend/sidebar';
import Navbar from '@/components/backend/Navbar';
export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex '>
        {/*sidebar*/}
        <Sidebar/>
        <div className="w-full">
            {/*header*/}
            <Navbar/>
            <main className="p-6 bg-slate-50 dark:bg-slate-900 text-slate-50 min-h-screen">
                {children}
            </main>
        </div>
    </div>
  )
}
