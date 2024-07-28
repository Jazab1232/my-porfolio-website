import React from 'react'
import '../styles/about.css'
import aboutImg from '../assets/about.png'
import ServicesCard2 from './ServicesCard2'

export default function About() {
  return (
    <div className='about'>
      <h2>ABOUT ME</h2>
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
    </div>
  )
}
