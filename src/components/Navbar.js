import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';
import { Button1 } from './Button1'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton);

  return (
  <>
  <nav className="navbar">
    <div className='navbar-container'>
        <Link to='/' className="navbar-logo" onClick=
        {closeMobileMenu}>
            <Link to='/' className='home' onClick={closeMobileMenu}>
            <img src='images/BUSY MAMA SVG .png' className='img'/>
            </Link>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/about-us' className='nav-links' onClick={closeMobileMenu}>
                    About Us
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/gallery' className='nav-links' onClick={closeMobileMenu}>
                    Gallery
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/bookings' className='nav-links' onClick={closeMobileMenu}>
                    Book with Us
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/reviews' className='nav-links' onClick={closeMobileMenu}>
                    Reviews
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/signup' className='nav-links-mobile' onClick={closeMobileMenu}>
                    Sign up
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/login' className='nav-links-mobile' onClick={closeMobileMenu}>
                    Login
                </Link>
            </li>
        </ul>
        {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        {button && <Button1 buttonStyle='btn--outline'>LOGIN</Button1>}
    </div>
  </nav>
  </>
  )
}

export default Navbar;