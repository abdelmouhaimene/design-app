"use client"
import ProjectsTab from '@/components/ProjectsTab'
import React from 'react'

const Portfolio = () => {
  return (
    <div className='p-10'>
        <p className='font-work-sans font-black text-8xl'>
            Portfolio
        </p>
        <hr className='mt-4 w-full h-1 text-white/70'/>
        <div className='mt-4'>
            <ProjectsTab />
        </div>
    </div>
  )
}

export default Portfolio