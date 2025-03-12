import React from 'react'
import About from '@/components/About'
import SignUp from '@/components/SignUp'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className='flex-between flex-responsive w-full relative lg:gap-y-2 gap-y-0'>
        <div className='md:w-1/2 w-full section-container z-10 '>
            <About />
        </div>
        <div className='md:w-1/2 w-full py-10 lg:px-20 md:px-10 px-4 z-10 ' >
            <SignUp />
        </div>
        <div className='animate-fly brightness-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/6 z-0 text-black'>
            <Image  src='/space.webp' width={588} height={323} alt='spacecraft'/>
        </div>
    </div>
  )
}

export default Hero