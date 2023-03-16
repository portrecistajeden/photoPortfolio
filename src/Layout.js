import { Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar";
import ScrollTopButton from "./Components/ScrollTopButton.js";

export default function Layout() {
    return(
        <>
            <NavBar />
            <Outlet />
            <ScrollTopButton/>
        </>
    );
};