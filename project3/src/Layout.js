import {Outlet, Link}  from "react-router-dom";
import "./App.css";


const Layout = () => {
    return(
        <>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <img src="https://pics.clipartpng.com/Tropical_Flower_PNG_Clipart-194.png" className="Logo"></img>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>

        </nav>
        <Outlet />
        </>
    );
}

export default Layout;