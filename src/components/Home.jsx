import React, { useEffect, useState } from 'react'
import '../styles/home.css'
import reactImg from '../assets/react.png'
import htmlImg from '../assets/html.png'
import cssImg from '../assets/css.png'
import jsImg from '../assets/javaScript.png'
import Card from './Card'
import { Link } from 'react-router-dom'
import ServicesCard2 from './ServicesCard2'
import MenuBar from './MenuBar'

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

  return (
    <div className='home'>
      <div className="main">
        <div className="heading">
          <h1>If You Can Imagine It,<br />
            We Can Build It <br />
            For You!</h1>
          <hr style={{ border: 'none', height: '1px', backgroundColor: '#54ADA3' }} />
          <p>Our innovative digital solutions deliver future-ready websites and web apps,
            so you can focus on what you do best.</p>
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
          <Card />
          <Card />
        </div>
        <div className='projectBtn'>
          <Link to='project' className='projectBtn1'> View More!</Link>
        </div>
      </div>
      <div className="ServiceSection">
        <p>Services we</p>
        <h1>Offered</h1>
        <hr style={{ border: 'none', height: '1px', backgroundColor: '#54ADA3' }} />
        <div className="serviceContainer">

          <ServicesCard2 title='Custom Web App' content='We specialize in developing modern, 
          flexible, secure, cross-platform, and user-friendly web apps that can handle spikes
           in demand and manage complex scenarios' />
          <ServicesCard2 title='Landing Pages' content='We focus on crafting attention-grabbing
           landing pages designed to persuade users to take the desired action. Our approach 
           combines striking backgrounds and images to make each section stand out.' />
        </div>
        <div className='projectBtn'>
          <Link to='services' className='projectBtn1'> View More!</Link>
        </div>
      </div>
      <MenuBar />
    </div>
  )
}
