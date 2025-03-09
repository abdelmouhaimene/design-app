import React from 'react'
import PricingCard from '@/components/PricingCard'
import { pricingData } from '@/data'
const Pricing = () => {
  return (
    <div className='p-10'>        
        <p className='font-work-sans font-black text-8xl'>
            Pricing
        </p>
        <hr className='mt-4 w-full h-1 text-white/70'/>
        <div className='mt-10 grid md:grid-cols-3 grid-cols-1 md:gap-8 gap-4'>
            {pricingData.map((pricingPack,index)=>(
                <PricingCard key={index} pricingPack={pricingPack} />
            ))}
        </div>
    </div>
  )
}

export default Pricing