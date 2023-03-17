import { Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar";
import ScrollTopButton from "./Components/ScrollTopButton.js";

export default function Layout({dimensions}) {
    return(
        <>
            <NavBar dimensions={dimensions}/>
            <Outlet />
            <ScrollTopButton/>
        </>
    );
};