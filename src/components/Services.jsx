import React, { useEffect } from 'react'
import '../styles/services.css'
import ServicesCard from './ServicesCard'
import SkillBar from './SkillBar'
import react from '../assets/react.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javaScript from '../assets/javaScript.png'
import github from '../assets/github1.png'
import firebase from '../assets/firebase.png'
import tailwind from '../assets/tailwind.png'
import bootstrap from '../assets/bootstrap.png'
import MenuBar from './MenuBar'
import { useLocation } from 'react-router-dom'

export default function Services() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className='services'>
      <div style={{ display: 'flex', flexDirection: 'column', color: 'white' }} >
        <p className='serTitle'>Services we</p>
        <h1>Offered</h1>
        <hr style={{ border: 'none', height: '1px', backgroundColor: '#54ADA3' }} />
        <p style={{ fontSize: '18px', paddingLeft: '5px' }}>Responsive Websites & Web Apps, and Full Stack Web Apps Development.</p>
        <ul style={{}}>
          <li style={{ fontSize: '16px', marginTop: '10px', marginLeft: '10px' }}>
            Custom Web Development (HTML, CSS,  JS, ReactJs, Firebase)
          </li>
        </ul>
        <div className="servicesBox">
          <ServicesCard
            title='Custom Web App'
            icon={<i className="fa-solid fa-desktop"></i>}
            content='We specialize in developing modern, flexible, secure, cross-platform, and 
            user-friendly web apps that can handle spikes in demand and manage complex scenarios' />
          <ServicesCard
            title='Full Stack Web Apps'
            icon={<i class="fa-solid fa-layer-group"></i>}
            content='We develop full-stack Web Apps for both the front-end and back-end project
             directories. Apart from using HTML and CSS, we also use JavaScript, ReactJs, and 
             Firebase to create full-stack web apps.' />
          <ServicesCard
            title='Landing Pages'
            icon={<i className="fa-solid fa-plane-arrival"></i>}
            content='We focus on crafting attention-grabbinglanding pages designed to persuade
             users to take the desired action. Our approach combines striking backgrounds and
              images to make each section stand out.' />
          <ServicesCard
            title='Responsive websites'
            icon={<i className="fa-solid fa-paste"></i>}
            content='We create responsive websites with CSS and JavaScript plugins, ensuring flexible 
            layouts and images that work seamlessly on mobile, desktop, and tablets. Our designs
            handle various media queries, screen sizes, resolutions, and color capabilities' />

        </div>

      </div>
      <div className='skillBox'>
        <h1>Skills</h1>
        <SkillBar img={react} level={'advance'} />
        <SkillBar img={javaScript} level={'advance'} />
        <SkillBar img={firebase} level={'intermediate'} />
        <SkillBar img={html} level={'advance'} />
        <SkillBar img={css} level={'advance'} />
        <SkillBar img={tailwind} level={'Basic'} />
        <SkillBar img={bootstrap} level={'intermediate'} />
        <SkillBar img={github} level={'intermediate'} />
      </div>

      <MenuBar />
    </div>
  )
}
