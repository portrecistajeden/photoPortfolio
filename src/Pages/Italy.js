import Gallery from "../Components/Gallery"
import { italyPhotos } from "../data"

export default function Italy() {
    return(
        <Gallery imagesArray={italyPhotos} catalog ='italy'/>
    )
}