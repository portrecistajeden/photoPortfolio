import './NavBar.css';
import { Link } from 'react-router-dom';

export default function NavBar({handleMenuButtonClick, dimensions}) {

    return(
        <nav id='navbar' >
            <div id='nameDiv'>
                <h2><Link className='nameLink' to='/'>piotr <span className='name'>awramiuk</span></Link></h2>
                {dimensions.width<=800 ? <span className='colorOnHover' onClick={() => handleMenuButtonClick()}>menu</span> : <></>}
            </div>
            <ul id='navlinks'>
                <li><Link className='navlink colorOnHover' to='/'>portraits</Link></li>
                <li><Link className='navlink colorOnHover' to='italy'>Puglia, Italy</Link></li>
                <li><Link className='navlink colorOnHover' to='infrared'>infrared</Link></li>
                <li><Link className='navlink colorOnHover' to='about'>o mnie</Link></li>
            </ul>
            <a className='coffee coffeeHover' href="https://buycoffee.to/portrecistajeden" target="_blank" rel="noreferrer">
                <img src="https://buycoffee.to/btn/buycoffeeto-btn-grey-outline.svg" width="150px" alt="Postaw mi kawę na buycoffee.to"/>
            </a>
        </nav>
    );
}