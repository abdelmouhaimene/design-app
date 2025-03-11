'use client'
import React from 'react'
import TestimonialsCard from './TestimonialsCard'
import { testimonialData } from '@/data'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/navigation'; // Optional navigation module styles
import 'swiper/css/pagination'; // Optional pagination module styles
import { Pagination, Autoplay } from 'swiper/modules';
const TestimonialsCaroussel = () => {
  return (
    <Swiper
    modules={[ Pagination,Autoplay]}
    spaceBetween={50}
    slidesPerView={3}
    pagination={{ clickable: true }}
    scrollbar={{draggable: true}}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    loop
    className='mt-10 p-10!'
    style={{'--swiper-pagination-color' : '#d605a4'} as React.CSSProperties }
    >
        {testimonialData.map((testimonial,index) => (
            <SwiperSlide key={index}>
                <TestimonialsCard testimonial={testimonial}  />
            </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default TestimonialsCaroussel