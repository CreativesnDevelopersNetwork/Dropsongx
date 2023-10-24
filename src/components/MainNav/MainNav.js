import "./nav.css";
import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from "../../assets/dropsongs.jpg";
import UserDrawer from "../UserDrawer/UserDrawer";


const MainNav = () => {  
    const [toggleMenu, setToggleMenu] = useState(false);    
    return(
        <div className="mediaNavbar">
        <div className="mediaNavbar-links">
          <div className="mediaNavbarLogo">
          <img src={logo} className="logo" alt=""/>
          </div>
          <div className="mediaNavbar-links_container">
          <p><a href="/">Home</a></p>
            <p><a href="/whyus">Sell Music</a></p>
            <p><a href="/prospects">Pricing</a></p>
            <p><a href="/features">Publishing</a></p>
            <p><a href="/contactus">Contact Us</a></p>
          </div>
        </div>
        <div className="mediaNavbar-sign">
         <span >
          <UserDrawer/>
         </span>
        </div>
        <div className="mediaNavbar-menu">
          {toggleMenu
            ? <RiCloseLine color="#000" size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#000" size={27} onClick={() => setToggleMenu(true)} />}
          {toggleMenu && (
          <div className="mediaNavbar-menu_container scale-up-center">
            <div className="mediaNavbar-menu_container-links">
            <p><a href="/">Home</a></p>
            <p><a href="/whyus">Sell Music</a></p>
            <p><a href="/prospects">Pricing</a></p>
            <p><a href="/features">Publishing</a></p>
            <p><a href="/contactus">Contact Us</a></p>
            </div>
            <div className="mediaNavbar-menu_container-links-sign">
            <UserDrawer/>
            </div>
          </div>
          )}
        </div>
      </div>
    )
}


export default MainNav;