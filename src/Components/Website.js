import { BrowserRouter, Routes, Route } from "react-router-dom";
import {portraitPhotos, italyPhotos, infraredPhotos} from '../data';
import Layout from '../Layout';
import ScrollToTop from './ScrollToTop';
import Gallery from "./Gallery";
import About from "../Pages/About";

export default function Website({dimensions, gridView, setGridView, menuOpen, setMenuOpen}) {   

    return (
        <BrowserRouter basename='/photoPortfolio'>
            <ScrollToTop/>
                <Routes>
                    <Route path='photoPortfolio' element={<Layout dimensions={dimensions} menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>}>
                    <Route index element={<Gallery imagesArray={portraitPhotos} catalog='portraits' gridView={gridView} setGridView={setGridView} dimensions={dimensions}/>}/>
                    <Route path='italy' element={<Gallery imagesArray={italyPhotos} catalog ='italy' gridView={gridView} setGridView={setGridView} dimensions={dimensions}/>}/>
                    <Route path='infrared' element={<Gallery imagesArray={infraredPhotos} catalog ='infrared' gridView={gridView} setGridView={setGridView} dimensions={dimensions}/>}/>
                    <Route path='about' element={<About/>}  dimensions={dimensions}/>
                    </Route>
                </Routes>
        </BrowserRouter> 
    )
}