import React, { useEffect, useState } from 'react'
import './Nav.css'
import NetflixLogo from './assets/images/NetflixLogo.png';
import avatar from './assets/images/Netflix-avatar.png';

function Nav() {
    const [show , handleShow] = useState(false);

    const transitionNavbar = () => {
        if(window.scrollY > 100)
            handleShow(true);
        else
            handleShow(false);
    }

    useEffect(() => {
        window.addEventListener("scroll" , transitionNavbar);
        return () => window.removeEventListener("scroll" , transitionNavbar);
    }, [])

  return (
    <div className={`nav ${show && 'nav_black'}`}>
        <div className='nav_contents'>
            <img className='nav_logo' src={NetflixLogo} alt=''/>
            <img className='nav_avatar' src={avatar} alt=''/>
        </div>
    </div>
  )
}

export default Nav
