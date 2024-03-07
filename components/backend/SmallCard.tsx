import React from 'react'

export default function SmallCard({data}:{data:{title:string, sales:number, iconbg:string, icon:any}}) {
    const{
        title, 
        sales,
        iconbg,
        icon:Icon
    } = data;
  return (
    <div className='rounded-lg shadow-lg bg-slate-50 dark:bg-slate-700 p-4'>
        {/*card in flex*/}
        <div className='flex space-x-4 '>
            <div className={`w-12 h-12 ${iconbg} rounded-full items-center flex justify-center `}>
                <Icon className='text-slate-50 dark:text-white-50'/>
            </div>
            <div className="">
                <p className="text-slate-800 dark:text-slate-50">{title}</p>
                <h3 className='text-2xl font-bold text-slate-800 dark:text-slate-50'>{sales}</h3>
            </div>
        </div>
    </div>
  )
}
