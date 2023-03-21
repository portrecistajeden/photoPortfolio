import Footer from './Components/Footer';
import Website from './Components/Website';
import { useState, useEffect } from "react";

export default function App() {

    const [gridView, setGridView] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    });
    
    useEffect(() => {
        const handleWindowResize = () => {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            });
            if(dimensions.width>800 && menuOpen) {
                setMenuOpen(false);
            }
        } 

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    });

    return(
        <>
            <Website gridView={gridView} setGridView={setGridView} dimensions={dimensions} menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <Footer/> 
        </>
    )
}