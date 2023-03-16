import './NavBar.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
        
    return(
        <nav id='navbar'>
            <h2>piotr <span className='name'>awramiuk</span></h2>
            <ul id='navlinks'>
                <li><Link className='navlink' to='/'>Home</Link></li>
                <li><Link className='navlink' to='/italy'>Italy</Link></li>
                <li><Link className='navlink about' to='about'>About me</Link></li>
            </ul>
        </nav>
    );
}