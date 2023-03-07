import Gallery from "../Components/Gallery";
import { homePhotos } from "../data";

export default function Home() {
    return(
        <Gallery imagesArray={homePhotos} catalog='home'/>
    )
}