
import React from 'react'
import { testimonialType } from '@/dataTypes'
import Image from 'next/image'
const TestimonialsCard = ({ testimonial }: { testimonial: testimonialType }) => {
  return (
    <div className='p-10 border-2 border-rose rounded-2xl font-work-sans shadow-md shadow-rose h-90'>
      <Image src={testimonial.companyLogo} alt={testimonial.companyName} height={100} width={100} />
     <div className=' h-40'>
      <p className='my-6 text-sm '>
        {testimonial.review}
      </p>
     </div>
      <div>
        <p className='text-lg font-bold'>
          {testimonial.author.name}
        </p>
        <p className=''>
          {testimonial.author.position}
        </p>
      </div>
    </div>
  );
};

export default TestimonialsCard