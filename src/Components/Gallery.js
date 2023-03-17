import './Gallery.css';
import { ButtonGrid } from './Styles';
import {BsFillGrid3X3GapFill, BsList } from 'react-icons/bs'
import { useState, useEffect } from 'react';

export default function Gallery ({imagesArray, catalog, gridView, setGridView, dimensions}) {

    const [photoToScrollTo, setPhototoScrollTo] = useState("");
    const _maxListWidth = 800;

    

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
                        <img src={require(`../Photos/${catalog}/${image.name}`)} alt={image.alt} id={`photo${index}`}/>   
                    </div>            
                </>
                :
                <>
                    <a  href={`#photo${index!==imagesArray.length-1 ? index+1 : 0}`} >
                        <img src={require(`../Photos/${catalog}/${image.name}`)} alt={image.alt} id={`img${index}`}/>
                    </a>
                    <p>{image.params}</p>
                </>
                )
            :
            <>    
                <a  href={`#photo${index!==imagesArray.length-1 ? index+1 : 0}`} >
                    <img src={require(`../Photos/${catalog}/${image.name}`)} alt={image.alt} id={`photo${index}`}/>   
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
                : <BsFillGrid3X3GapFill className='gridButton' onClick={() => setGridView(true)} /> 
                }                               
            </ButtonGrid>
        </div>
    ) 
}