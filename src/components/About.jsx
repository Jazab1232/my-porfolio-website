import React, { useEffect } from 'react'
import '../styles/about.css'
import aboutImg from '../assets/about.png'
import ServicesCard2 from './ServicesCard2'
import MenuBar from './MenuBar'
import { useLocation } from 'react-router-dom'

export default function About() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className='about'>
      <h2>About Me</h2>
      <div style={{ display: 'flex', gap: '25px' }} className='aboutMain'>
        <div className="aboutContent">
          <p>
            I help business owners and busy web developers to design & develop creative
            websites that fits their vision and attracts the visitors to stay for ever.
            Technologies and tools that I use to create such awesome websites.</p>
          <div className="aboutSkills">
            <span>#javascript</span>
            <span>#react.js </span>
            <span>#git</span>
            <span>#github</span>
            <span>#html</span>
            <span>#css</span>
            <span>#bootstrap</span>
            <span>#terminal</span>
          </div>
        </div>
        <div className="aboutImg">
          <img src={aboutImg} alt="" />
        </div>
      </div>
      
      <MenuBar />
    </div>
  )
}
