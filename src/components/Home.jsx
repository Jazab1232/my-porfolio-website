import React, { useEffect, useState } from 'react'
import '../styles/home.css'
import reactImg from '../assets/react.png'
import htmlImg from '../assets/html.png'
import cssImg from '../assets/css.png'
import jsImg from '../assets/javaScript.png'
import Card from './Card'
import { Link, useLocation } from 'react-router-dom'
import MenuBar from './MenuBar'
import ServicesCard from './ServicesCard'
import zenCart from '../assets/zenCart.png'
import digitalAura from '../assets/digitalAura.png'

export default function Home() {
  let images = [
    cssImg,
    htmlImg,
    reactImg,
    jsImg,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('enter');

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass('exit');
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setAnimationClass('enter');
      }, 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className='home'>
      <div className="main">
        <div className="heading">
          <h1>What You Can Think<br />
            We Can Develop It <br />
            For You!</h1>
          <hr style={{ border: 'none', height: '1px', backgroundColor: '#54ADA3' }} />
          <p>We create future-ready websites & web apps via innovative digital solutions so that
            you can focus on your core business.</p>
          <Link to='contact' className='talkBtn'>Let's Talk</Link>
        </div>
        <div className="mainImg">
          <img
            src={images[currentImageIndex]}
            alt="slideshow"
            className={animationClass} />
        </div>
      </div>
      <div className="projectSection">
        <p>Explore our done</p>
        <h1>Projects</h1>
        <hr style={{ border: 'none', height: '1px', backgroundColor: '#54ADA3' }} />
        <div className="homeCard">
          <Card
            img={digitalAura}
            title='Digital Aura'
            live={'https://digital-aura.netlify.app/ '}
            desc='Digital Aura is a sleek, modern blog platform featuring a powerful admin
             panel and Firebase integration for secure, real-time data management. It offers 
             effortless content creation, customization, and a seamless user experience, perfect
              for sharing dynamic articles, tutorials, and creative insights.'
            color={'#57B1BD'}

          />
          <Card
            img={zenCart}
            title='ZenCart'
            live={'https://zencart-portfolios.netlify.app/'}
            desc='ZenCart is a modern e-commerce platform where users can browse and purchase 
            products effortlessly. With Firebase integration for secure, real-time data
             management, ZenCart ensures a seamless shopping experience from product discovery
              to checkout and a seamless user experience.'
            color={'#F4C925'}
          />

        </div>
        <div className='projectBtn'>
          <Link to='project' className='talkBtn'> View More!</Link>
        </div>
      </div>
      <div className="ServiceSection">
        <p>Services we</p>
        <h1>Offered</h1>
        <hr style={{ border: 'none', height: '1px', backgroundColor: '#54ADA3' }} />
        <div className="serviceContainer">

          <ServicesCard
            title='Custom Web App'
            icon={<i className="fa-solid fa-desktop"></i>}
            content='We specialize in developing modern, 
          flexible, secure, cross-platform, and user-friendly web apps that can handle spikes
           in demand and manage complex scenarios' />
          <ServicesCard
            title='Landing Pages'
            icon={<i className="fa-solid fa-plane-arrival"></i>}
            content='We focus on crafting attention-grabbing
           landing pages  to persuade users to take the desired action. Our approach 
           combines striking backgrounds and images to make each section stand out.' />
        </div>
        <div className='projectBtn'>
          <Link to='services' className='talkBtn'> View More</Link>
        </div>
      </div>
      <MenuBar />
    </div>
  )
}
