'use client'
import React from 'react'
import TestimonialsCard from './TestimonialsCard'
import { testimonialData } from '@/data'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/navigation'; // Optional navigation module styles
import 'swiper/css/pagination'; // Optional pagination module styles
import { Navigation, Pagination } from 'swiper/modules';
const TestimonialsCaroussel = () => {
  return (
    <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        centeredSlides
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