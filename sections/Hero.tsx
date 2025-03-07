import React from 'react'
import About from '@/components/About'
import SignUp from '@/components/SignUp'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className='flex-between w-full relative '>
        <div className='w-1/2 p-10 z-10 '>
            <About />
        </div>
        <div className='w-1/2 py-10 px-20 z-10 ' >
            <SignUp />
        </div>
        <div className='animate-fly brightness-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/6 z-0 text-black'>
            <Image  src='/space.webp' width={588} height={323} alt='spacecraft'/>
        </div>
    </div>
  )
}

export default Hero