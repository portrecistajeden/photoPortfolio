import { BrowserRouter, Routes, Route } from "react-router-dom";
import {portraitPhotos, italyPhotos, infraredPhotos, bal_inz} from '../data';
import Layout from '../Layout';
import ScrollToTop from './ScrollToTop';
import Gallery from "./Gallery";
import About from "../Pages/About";

export default function Website({dimensions, gridView, setGridView, menuOpen, setMenuOpen}) {   

    

    return (
        <BrowserRouter >
            <ScrollToTop/>
                <Routes>
                    <Route path='/' element={<Layout dimensions={dimensions} menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>}>
                    <Route index element={<Gallery imagesArray={portraitPhotos} catalog='portraits' gridView={gridView} setGridView={setGridView} dimensions={dimensions}/>}/>
                    <Route path='italy' element={<Gallery imagesArray={italyPhotos} catalog ='italy' gridView={gridView} setGridView={setGridView} dimensions={dimensions}/>}/>
                    <Route path='infrared' element={<Gallery imagesArray={infraredPhotos} catalog ='infrared' gridView={gridView} setGridView={setGridView} dimensions={dimensions}/>}/>
                    <Route path='bal_inz' element={<Gallery imagesArray={bal_inz} catalog ='bal_inz' gridView={gridView} setGridView={setGridView} dimensions={dimensions}/>}/>
                    <Route path='about' element={<About dimensions={dimensions}/>} />
                    </Route>
                </Routes>
        </BrowserRouter> 
    )
}