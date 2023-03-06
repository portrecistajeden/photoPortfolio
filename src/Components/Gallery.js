import './Gallery.css';

export default function Gallery ({imagesArray, catalog}) {
    const images = imagesArray.map((image, index) => 
        <div  className='imageBox' id={`photo${index}`}>
            <figure>
                <a href={`#photo${index!==imagesArray.length-1 ? index+1 : 0}`} >
                    <img src={require(`../Photos/${catalog}/${image.name}`)} alt={image.alt} />
                </a>
                <figcaption>{image.params}</figcaption>
            </figure>
        </div>
        )
    return(
        <div className='gallery'>
            {images}
        </div>
    ) 
}