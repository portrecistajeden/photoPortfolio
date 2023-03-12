import './Gallery.css';

export default function Gallery ({imagesArray, catalog, gridView, setGridView}) {


    const images = imagesArray.map((image, index) => 
        <div  className={`imageBox ${gridView ? 'grid3Col' : 'grid1Col'} ${image.orientation}`} id={`photo${index}`}>
            <figure>
                {gridView ? 
                <>
                    <img src={require(`../Photos/${catalog}/${image.name}`)} alt={image.alt} />
                   
                </>
                :
                <>
                    <a href={`#photo${index!==imagesArray.length-1 ? index+1 : 0}`} >
                        <img src={require(`../Photos/${catalog}/${image.name}`)} alt={image.alt} />
                    </a>
                    <figcaption>{image.params}</figcaption>
                </>
                }
                {/* <a href={`#photo${index!==imagesArray.length-1 ? index+1 : 0}`} >
                    <img src={require(`../Photos/${catalog}/${image.name}`)} alt={image.alt} />
                </a>
                {!gridView ? <figcaption>{image.params}</figcaption> : null} */}
            </figure>
        </div>
        )
    return(
        <div className={`gallery ${gridView ? 'grid3' : 'grid1'}`}>
            {images}
            <button className='displayButton' onClick={() => setGridView(!gridView)}>Grid</button>
        </div>
    ) 
}