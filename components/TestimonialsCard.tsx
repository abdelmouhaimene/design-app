
import React from 'react'
import { testimonialType } from '@/dataTypes'
const TestimonialsCard = ({testimonial} : {testimonial: testimonialType}) => {
  return (
    <div>
        {testimonial.author.name}
    </div>
  )
}

export default TestimonialsCard