import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
        setButton(true);
        }
    };
    window.addEventListener('resize', showButton);
         
    const closeMobileMenu = () => setClick(false);

  return (
  <>
  <nav className= "navbar">
    <div className = "navbar-container">
        <Link to= "/" className= "navbar-logo" onClick= {closeMobileMenu}> TRVL <i className= 'fab fa-typo3'> 
        </i></Link>
        <div className='menu-icon' onClick={handleClick}>
            <i className = {click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className = {click ? 'nav-menu active' : 'nav-menu'}> 
        <li className ='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
            </Link>
        </li>
        <li className ='nav-item'>
            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                Services
            </Link>
        </li>
        <li className ='nav-item'>
            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                Products
            </Link>
        </li>
        <li className ='nav-item'>
            <Link to='/signup' className='nav-links' onClick={closeMobileMenu}>
                Sign up
            </Link>
        </li>
        </ul>
        {button && <Button buttonStyle = 'btn--outline' link= './signup'>SIGN UP</Button>}
    </div>
  </nav>
 
  </>
  )
}

export default Navbar