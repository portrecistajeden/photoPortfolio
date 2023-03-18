import './NavBar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function NavBar({dimensions}) {
    
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    }


    return(
        <nav id='navbar' className={dimensions.width<=800 ? (menuOpen ? 'mobileOpen' : 'mobileClosed') : 'desktop'}>
            <div id='nameDiv'>
                <h2><Link onClick={() => setMenuOpen(false)} className='nameLink' to='/'>piotr <span className='name'>awramiuk</span></Link></h2>
                <span onClick={handleMenuClick} id='menuButton'>Menu</span>
            </div>
            <ul id='navlinks'>
                <li><Link onClick={() => setMenuOpen(false)} className='navlink' to='/'>portraits</Link></li>
                <li><Link onClick={() => setMenuOpen(false)} className='navlink' to='/italy'>italy</Link></li>
                <li><Link onClick={() => setMenuOpen(false)} className='navlink' to='/infrared'>infrared</Link></li>
                <li><Link onClick={() => setMenuOpen(false)} className='navlink about' to='about'>About me</Link></li>
            </ul>
        </nav>
    );
}