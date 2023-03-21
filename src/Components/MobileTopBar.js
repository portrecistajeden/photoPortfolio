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
                    <a className='coffeeHover' href="https://buycoffee.to/portrecistajeden" target="_blank" rel="noreferrer">
                        <img src="https://buycoffee.to/btn/buycoffeeto-btn-grey-outline.svg" width="150px" alt="Postaw mi kawę na buycoffee.to"/>
                    </a>
                </div>
            :
            <></>}
        </div>
    );
}