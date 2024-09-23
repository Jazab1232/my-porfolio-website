import React from 'react'
import '../styles/menu.css'
import { Link, useOutletContext } from 'react-router-dom'
import logo from '../assets/logo.png'

function MenuBar() {
    const [menu, setMenu] = useOutletContext()
    function hideMenu() {
        setMenu(!menu)
    }
    return (
        <div className='menu' style={{ left: menu ? '0px' : '-200px' }}>
            <div className="menuLogo">
                <img src={logo} alt="" />
            </div>
            <Link to='/' onClick={hideMenu} className='link'>HOME</Link>
            <Link to='/project' onClick={hideMenu} className='link'>ROJECTS</Link>
            <Link to='/services' onClick={hideMenu} className='link'>SERVICES</Link>
            <Link to='/contact' onClick={hideMenu} className='link'>CONTACT</Link>
            <Link to='/about' onClick={hideMenu} className='link'>ABOUT</Link>
        </div>
    )
}

export default MenuBar