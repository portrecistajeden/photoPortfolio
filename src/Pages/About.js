import './About.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

export default function About(dimensions) {
    return (
        <div className='aboutWrapper'>
            <div className='aboutImageWrapper'>
                <img id='aboutPhoto' src={require(`../Photos/about/aboutPhoto.jpg`)} alt="Piotr Awramiuk's portrait"/>
            </div>
            <div className='textWrapper'>
                <h2>About me</h2>
                <p id='aboutMeText'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pulvinar erat at sem convallis convallis. Sed ac tellus tincidunt, laoreet urna sit amet, rhoncus turpis. Praesent justo mi, tempus eget lobortis sed, ultrices ac augue. Phasellus vitae porta leo. Quisque sed arcu id urna efficitur bibendum. Curabitur a libero pulvinar, dictum elit eu, vulputate tortor. Donec lectus enim, tempor et molestie eget, euismod vitae arcu. Ut auctor nunc est, at accumsan elit posuere vel. Nunc molestie sapien elit, non eleifend ipsum lobortis vel. Sed gravida tempus velit a rhoncus. Nunc rutrum cursus quam sed lacinia.
                </p>
                <ul id='contacts'>
                    <li>
                        <a href='https://www.instagram.com/portrecistajeden/' target='_blank' rel="noreferrer">
                            <FontAwesomeIcon icon={faInstagram} id='icon'/> @portrecistajeden
                        </a>
                    </li>
                    <li>
                        <a href='mailto:piawramiuk@gmail.com'>
                            <FontAwesomeIcon icon={faEnvelope} id='icon'/> piawramiuk@gmail.com
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}