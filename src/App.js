import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import ScrollToTop from './Components/ScrollToTop';
import { useState, useEffect } from "react";
import {portraitPhotos, italyPhotos, infraredPhotos} from './data';
import Gallery from "./Components/Gallery";
import About from "./Pages/About";

export default function App() {

    const [gridView, setGridView] = useState(false);
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
        } 

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    });

    return (
        <BrowserRouter>
            <ScrollToTop/>
                <Routes>
                    <Route path='/' element={<Layout dimensions={dimensions}/>}>
                    <Route index element={<Gallery imagesArray={portraitPhotos} catalog='portraits' gridView={gridView} setGridView={setGridView} dimensions={dimensions}/>}/>
                    <Route path='italy' element={<Gallery imagesArray={italyPhotos} catalog ='italy' gridView={gridView} setGridView={setGridView} dimensions={dimensions}/>}/>
                    <Route path='infrared' element={<Gallery imagesArray={infraredPhotos} catalog ='infrared' gridView={gridView} setGridView={setGridView} dimensions={dimensions}/>}/>
                    <Route path='about' element={<About/>}  dimensions={dimensions}/>
                    </Route>
                </Routes>
        </BrowserRouter> 
    )
}