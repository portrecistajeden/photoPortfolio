import './NavBar.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return(
        <nav id='navbar'>
            <h2>Piotr Awramiuk</h2>
            <ul id='navlinks'>
                <li><Link className='navlink' to='/'>Home</Link></li>
                <li><Link className='navlink' to='/italy'>Italy</Link></li>
            </ul>
        </nav>
    );
}