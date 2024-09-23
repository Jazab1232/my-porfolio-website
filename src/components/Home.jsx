import React, { useEffect, useState } from 'react'
import '../styles/home.css'
import reactImg from '../assets/react.png'
import htmlImg from '../assets/html.png'
import cssImg from '../assets/css.png'
import jsImg from '../assets/javaScript.png'
import Card from './Card'
import { Link, useLocation } from 'react-router-dom'
import MenuBar from './MenuBar'
import countriesApi from '../assets/countriesApi2.jpg'
import olx from '../assets/olx2.jpg'
import ServicesCard from './ServicesCard'

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
          <Card img={olx}

            title='OLX APP'
            live={'https://deft-panda-07ab66.netlify.app/ '}
            desc='I have created an OLX-like platform that allows users to register, list items
             for sale with detailed descriptions and images, and efficiently search for products. 
             Users can easily filter products based on various criteria, ensuring they find exactly 
             what they need. The platform offers a seamless and user-friendly interface for all
              buying and selling needs.'
            color={'#57B1BD'}

          />
          <Card img={countriesApi}
            title='Countries API'
            live={'https://countries-api-portfolio.netlify.app/'}
            desc='I have created a countries API project that fetches data from an API and 
            displays it in interactive cards. Users can search for specific countries and click 
            on any card to view detailed information about that country. This project provides an
            F intuitive and informative way to explore and learn about various countries.'
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
