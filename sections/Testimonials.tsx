import TestimonialsCaroussel from '@/components/TestimonialsCaroussel'
import React from 'react'

const Testimonials = () => {
    return (
        <div className='p-10'>
            <div className='w-full flex-center gap-x-2 font-semibold text-lg'>
                <hr className='w-8  animate-gradient'/> Testimonials <hr className='w-8 animate-gradient'/>
            </div>
            <div className='mt-6 font-work-sans flex-center font-black text-6xl text-center'>
                Our valuable success <br /> clients story
            </div>
            <div>
                <TestimonialsCaroussel />
            </div>
        </div>
    )
}

export default Testimonials