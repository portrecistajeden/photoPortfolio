import './About.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { useEffect} from 'react';

export default function About({dimensions}) {

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                entry.target.classList.add('showAboutPhoto');                
            }
            else {
                entry.target.classList.remove('showAboutPhoto');
            }
        });
    },{threshold: 0.5}
    );  

    useEffect(() =>{
        const hiddenElements = document.querySelectorAll('.hiddenAboutPhoto');
        hiddenElements.forEach((element) => {observer.observe(element)});
    }, [dimensions.width>800])


    return (
        <div className='aboutWrapper'>
            <div className='aboutImageWrapper'>
                <img id='aboutPhoto' className={dimensions.width>800 ? 'hiddenAboutPhoto' : ''} src={require(`../Photos/about/aboutPhoto.jpg`)} alt="Piotr Awramiuk's portrait"/>
            </div>
            <div className='textWrapper'>
                <h2>O mnie</h2>
                <p id='aboutMeText'>
                Nazywam się Piotr Awramiuk, jestem fotografem zamieszkałym w Białymstoku. 
                <br/><br/> Moimi głównymi zainteresowaniami są portrety, łamanie ogólnieprzyjętych zasad fotografii i ciągłe eksperymentowanie z nowymi technikami. 
                Poza własnymi projektami i sesjami wykonuję również zlecenia na sesje wizerunkowe, portretowe, biznesowe czy też na studniówki, bale, imprezy urodzinowe itd.
                Uwielbiam zarówno sprzęt cyfrowy jak i analogowy, którego mam zdecydowanie za dużo jak na własne potrzeby. 
                <br/>Od jakiegoś czasu interesuje mnie ukazywanie świata w podczerwieni, efekty czego możecie zobaczyć w odpowiedniej zakładce po lewej.
                <br/><br/> Jeśli masz dla mnie zlecenie, lub chciałbyś/chciałabyś coś wspólnie stworzyć to zapraszam do kontaktu.
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