import Gallery from "../Components/Gallery";
import { homePhotos } from "../data";

export default function Home() {
    return(
        <div>
            <Gallery imagesArray={homePhotos} catalog='home'/>
        </div>
    )
}