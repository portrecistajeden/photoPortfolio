import './Gallery.css';
import { ButtonGrid } from './Styles';
import {BsFillGrid3X3GapFill, BsList } from 'react-icons/bs'

export default function Gallery ({imagesArray, catalog, gridView, setGridView}) {

   

    const images = imagesArray.map((image, index) => 
        <div  className={`imageBox ${gridView ? 'grid3Col' : 'grid1Col'} ${image.orientation}`} id={`photo${index}`}>
            
            {gridView ? 
            <>
                <img src={require(`../Photos/${catalog}/${image.name}`)} alt={image.alt} />            
            </>
            :
            <>
                <a href={`#photo${index!==imagesArray.length-1 ? index+1 : 0}`} >
                    <img src={require(`../Photos/${catalog}/${image.name}`)} alt={image.alt} id={`img${index}`}/>
                </a>
                <p>{image.params}</p>
            </>
            }            
        </div>
        )
    return(
        <div className={`gallery ${gridView ? 'grid3' : 'grid1'}`}>
            {images}
            <ButtonGrid>
                {gridView 
                ? <BsList className='listButton' onClick={() => setGridView(false)}/>
                : <BsFillGrid3X3GapFill className='gridButton' onClick={() => setGridView(true)} /> 
                }                               
            </ButtonGrid>
        </div>
    ) 
}