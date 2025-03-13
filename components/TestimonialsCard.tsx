
import React from 'react'
import { testimonialType } from '@/dataTypes'
import Image from 'next/image'
const TestimonialsCard = ({ testimonial }: { testimonial: testimonialType }) => {
  return (
    <div className='p-10 lg:p-10 md:p-4  border-2 border-rose rounded-2xl font-work-sans shadow-md shadow-rose lg:h-90 h-100'>
      <Image src={testimonial.companyLogo} alt={testimonial.companyName} height={100} width={100} />
     <div className='lg:h-40 h-50'>
      <p className='my-6 sm:text-sm text-lg'>
        {testimonial.review}
      </p>
     </div>
      <div>
        <p className='sm:text-lg text-xl font-bold'>
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