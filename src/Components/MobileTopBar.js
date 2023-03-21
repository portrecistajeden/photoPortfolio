import './MobileTopBar.css';
import { Link } from 'react-router-dom';

export default function MobileTopBar ({menuOpen, setMenuOpen, dimensions}) {
    return (
        <div>
            {dimensions.width<=800 ?
                <div id="mobileBar" className={menuOpen ? 'barOpen' : 'barClosed'}>
                    <ul id='mobileLinks'>
                        <li><Link onClick={() => setMenuOpen(false)} className='mobileLink colorOnHover' to='/'>portraits</Link></li>
                        <li><Link onClick={() => setMenuOpen(false)} className='mobileLink colorOnHover' to='/italy'>italy</Link></li>
                        <li><Link onClick={() => setMenuOpen(false)} className='mobileLink colorOnHover' to='/infrared'>infrared</Link></li>
                        <li><Link onClick={() => setMenuOpen(false)} className='mobileLink colorOnHover' to='about'>About me</Link></li>
                    </ul>
                </div>
            :
            <></>}
        </div>
    );
}