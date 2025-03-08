import React,{useState } from 'react'
import { portfolioData } from '@/data'
import PortoflioCarousel from './PortoflioCarousel'
const ProjectsTab = () => {
    const [selectedTab,setSelectedTab] = useState(portfolioData[0])

  return (
    <div>
        <div className='flex-between'>
            {portfolioData.map((tab,index) => (
                <button onClick={() => setSelectedTab(tab)} className={selectedTab.name === tab.name ? 'text-rose font-work-sans font-semibold cursor-pointer' : 'link-button font-work-sans font-semibold'} key={index}>{tab.name}</button>
            ))}
        </div>
        <div>
            <PortoflioCarousel selectedTab={selectedTab}/>
        </div>
    </div>
  )
}

export default ProjectsTab