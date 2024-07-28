import React from 'react'
import '../styles/menu.css'
import { Link, useOutletContext } from 'react-router-dom'
import logo from '../assets/logo.png'

function MenuBar() {
    const [menu, setMenu] = useOutletContext()
    return (
        <div className='menu' style={{ left: menu ? '0px' : '-200px' }}>
            <div className="menuLogo">
                <img src={logo} alt="" />
            </div>
            <Link className='menuLink'>HOME</Link>
            <Link className='menuLink'>PROJECTS</Link>
            <Link className='menuLink'>SERVICES</Link>
            <Link className='menuLink'>ABOUT</Link>
            <Link className='menuLink'>CONTACT</Link>
        </div>
    )
}

export default MenuBar