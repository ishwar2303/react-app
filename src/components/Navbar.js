import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


import '../components/css/Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const backToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    window.onscroll = () => {
        let el = document.getElementsByClassName('back-to-top')[0]
        if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            el.style.display = 'flex'
        }
        else {
            el.style.display = 'none'
        }
    }

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        ReactApp
                        <i class='fab fa-typo3' />
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
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/team' className='nav-links' onClick={closeMobileMenu}>
                                Team
                            </Link>
                        </li>
                    </ul>
                    <Link to='/sign-up' className='btn btn--outline btn--medium'>Sign Up</Link>
                    <Link to='/sign-in' className='btn btn--outline btn--medium'>Sign In</Link>
                </div>


                <div className='back-to-top' onClick={backToTop}>
                    <i className='fas fa-chevron-up' />
                </div>

            </nav>  
        </>
    )
}

export default Navbar
