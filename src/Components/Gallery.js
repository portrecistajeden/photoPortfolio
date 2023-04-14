import './Gallery.css';
import { ButtonGrid } from './Styles';
import {BsFillGrid3X3GapFill, BsList } from 'react-icons/bs'
import { useState, useEffect } from 'react';

export default function Gallery ({imagesArray, catalog, gridView, setGridView, dimensions}) {

    const [photoToScrollTo, setPhototoScrollTo] = useState("");
    const _maxListWidth = 800;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                entry.target.classList.add('show');                
            }
            else {
                entry.target.classList.remove('show');
            }
        });
    }
    );  

    useEffect(() =>{
        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((element) => {observer.observe(element)});
    }, [gridView, imagesArray])
    

    const handlePhotoGridClick = (photoID) => {
        setPhototoScrollTo(photoID);
        setGridView(false);
    }

    const scrollToImage = (photoID) => {
        if(photoToScrollTo==="") return;
        const element = document.getElementById(photoID);
        if(element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    }

    useEffect(() => {
        scrollToImage(photoToScrollTo);
    }, [photoToScrollTo])

    const images = imagesArray.map((image, index) => 
        <div  className={`imageBox ${dimensions.width>_maxListWidth ? (gridView ? 'grid3Col' : 'grid1Col') : 'grid3Col'} ${image.orientation}`} key={`photo${index}`} id={`photo${index}`}>
           {dimensions.width>_maxListWidth ? 
                (gridView ? 
                <>    
                    <div className='gridImageDiv' onClick={() => handlePhotoGridClick(`photo${index}`)}>
                        <img className='show' src={require(`../Photos/${catalog}/${image.name}`)} alt={image.alt} id={`photo${index}`}/>   
                    </div>            
                </>
                :
                <>
                    <div id='imgBox'>
                        <a id='anchor' href={`#photo${index!==imagesArray.length-1 ? index+1 : 0}`} >
                            <div id='imageContainer'>
                                <img className='hidden' src={require(`../Photos/${catalog}/${image.name}`)} alt={image.alt} id={`photo${index}`}/>
                            </div>
                        </a>
                    </div>
                    <p>{image.params}</p>
                    {/* 
                        <img className='hidden' src={require(`../Photos/${catalog}/${image.name}`)} alt={image.alt} id={`photo${index}`}/>
                    </a>
                        */}
                </>
                )
            :
            <>    
                <a  href={`#photo${index!==imagesArray.length-1 ? index+1 : 0}`} >
                    <img className='hidden' src={require(`../Photos/${catalog}/${image.name}`)} alt={image.alt} id={`photo${index}`}/>   
                </a>            
            </>
            }            
        </div>
        )

    return(
        <div className={`gallery ${dimensions.width>_maxListWidth ? (gridView ? 'grid3' : 'grid1') : 'grid3'}`}>
            {images}
            <ButtonGrid>
                {gridView 
                ? <BsList className='listButton' onClick={() => handlePhotoGridClick('photo0')}/>
                : <BsFillGrid3X3GapFill className='gridButton' onClick={() => setGridView(true)} />}                               
            </ButtonGrid>
        </div>
    ) 
}