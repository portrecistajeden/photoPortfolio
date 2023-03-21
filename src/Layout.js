import { Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar";
import ScrollTopButton from "./Components/ScrollTopButton.js";
import MobileTopBar from './Components/MobileTopBar';

export default function Layout({dimensions, menuOpen, setMenuOpen}) {
    
    const handleMenuButtonClick = () => {
        setMenuOpen(!menuOpen);
    }

    return(
        <>
            <NavBar handleMenuButtonClick={handleMenuButtonClick} dimensions={dimensions}/>
            <MobileTopBar menuOpen={menuOpen} dimensions={dimensions}/>
            <Outlet />
            <ScrollTopButton dimensions={dimensions}/>
        </>
    );
};