import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import ScrollToTop from './Components/ScrollToTop';
import { useState } from "react";
import {homePhotos, italyPhotos} from './data';
import Gallery from "./Components/Gallery";
import About from "./Pages/About";

export default function App() {

    const [gridView, setGridView] = useState(false);

    return (
        <BrowserRouter>
            <ScrollToTop/>
                <Routes>
                    <Route path='/' element={<Layout/>}>
                    <Route index element={<Gallery imagesArray={homePhotos} catalog='home' gridView={gridView} setGridView={setGridView}/>}/>
                    <Route path='italy' element={<Gallery imagesArray={italyPhotos} catalog ='italy' gridView={gridView} setGridView={setGridView}/>}/>
                    <Route path='about' element={<About/>} />
                    </Route>
                </Routes>
        </BrowserRouter> 
    )
}