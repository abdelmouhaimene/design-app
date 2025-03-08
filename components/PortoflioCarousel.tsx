import React from 'react'
import { PortfolioCategoryType } from '@/dataTypes';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/navigation'; // Optional navigation module styles
import 'swiper/css/pagination'; // Optional pagination module styles
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

const PortoflioCarousel = ({selectedTab} : {selectedTab : PortfolioCategoryType}) => {


  return (
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        centeredSlides
      >
        {selectedTab.projects.map((project,index) => (
          <SwiperSlide key={index}>
            <Image src={project.image} alt={project.name} width={400} height={400}  />
          </SwiperSlide>
        ))}
      </Swiper>
  )
}

export default PortoflioCarousel