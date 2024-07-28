import React from 'react'
import '../styles/services.css'
import ServicesCard from './ServicesCard'

import SkillBar from './SkillBar'
import react from '../assets/react.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javaScript from '../assets/javaScript.png'
import github from '../assets/github1.png'
import ServicesCard2 from './ServicesCard2'
import landingPage from '../assets/landingPage.png'
import flexbox from '../assets/flexbox.png'

export default function Services() {
  return (
    <div className='services'>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
        {/* <p className='serTitle'>Services we</p> */}
        <h1>Services</h1>
        <hr style={{ border: 'none', height: '1px', backgroundColor: '#54ADA3' }} />
        <div className="servicesBox">
          <ServicesCard2 title='Custom Web App' content='We specialize in developing modern, 
          flexible, secure, cross-platform, and user-friendly web apps that can handle spikes
           in demand and manage complex scenarios' />
          <ServicesCard2 title='Landing Pages' icon={landingPage} content='We focus on crafting attention-grabbing
           landing pages designed to persuade users to take the desired action. Our approach 
           combines striking backgrounds and images to make each section stand out.' />
          <ServicesCard2 title='Responsive websites' icon={flexbox} content='We create responsive websites with 
          CSS and JavaScript plugins, ensuring flexible layouts and images that work seamlessly on
           mobile, desktop, and tablets. Our designs handle various media queries, screen sizes, 
           resolutions, and color capabilities' />
        </div>

      </div>
      <div className='skillBox'>
        <h1>Skills</h1>
        <SkillBar img={react} level={'advance'} />
        <SkillBar img={html} level={'advance'} />
        <SkillBar img={css} level={'advance'} />
        <SkillBar img={javaScript} level={'advance'} />
        <SkillBar img={github} level={'intermediate'} />
      </div>
    </div>
  )
}
