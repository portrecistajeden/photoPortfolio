import Gallery from "../Components/Gallery"
import { italyPhotos } from "../data"

export default function Italy() {
    return(
        <div>
            <Gallery imagesArray={italyPhotos} catalog ='italy'/>
        </div>
    )
}