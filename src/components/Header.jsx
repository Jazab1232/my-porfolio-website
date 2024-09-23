import React from 'react'
import logo from '../assets/logo.png'
import '../styles/header.css'
import { Link } from 'react-router-dom'


export default function Header({ menu, setMenu }) {
  function showMenu() {
    setMenu(!menu)
  }
  return (
    <div className="header">
      <div className='navbar'>
        <Link to='/' className="logo">
          <img src={logo} alt="" />
        </Link>
        <div className="navLinks">
          <Link to='/' className='link'>HOME</Link>
          <Link to='/project' className='link'>ROJECTS</Link>
          <Link to='/services' className='link'>SERVICES</Link>
          <Link to='/contact' className='link'>CONTACT</Link>
          <Link to='/about' className='link'>ABOUT</Link>
        </div>
        <div className="quote">
          <Link to='contact' className='quoteBtn'>Get quote</Link>
        </div>
        <i className="fa-solid fa-bars menuBar" onClick={showMenu}></i>
      </div>
    </div>
  )
}
