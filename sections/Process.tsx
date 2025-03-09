import React from 'react'
import { processData } from '@/data'
import ProcessStep from '@/components/ProcessStep'

const Process = () => {
  return (
    <div className='p-10'>
         <div className='w-full flex-center gap-x-2 font-semibold text-lg'>
            <hr className='w-8  animate-gradient'/> Process <hr className='w-8 animate-gradient'/>
        </div>
        <div className='mt-6 font-work-sans flex-center font-black text-6xl text-center'>
            Matching Your Business <br /> Needs Effectively
        </div>
        <div className='mt-2 font-work-sans font-light text-sm text-center text-gray-200'>
            We’re determined to explore more than what may be just a quick fix for your business. Together,<br /> we can tailor our <span className='font-bold'>animated corporate video production</span> for continual growth.
        </div>
        <div>
            {processData.map((step,index) => (
                <ProcessStep key={index} step={step} />
            ))}
        </div>
    </div>
  )
}

export default Process