import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';


export default function ContactUs() {
    const [toggleMenu, setToggleMenu] = useState(false);
  

  return (    
    <>
     {/* navbar */}
    <div className="mediaNavbar">
      <div className="mediaNavbar-links">
        <div className="mediaNavbarLogo">
          <h1>Excellent<i className='goldText'>Tech</i></h1>
        </div>
        <div className="mediaNavbar-links_container">
        <p><a href="/">Home</a></p>
          <p><a href="/whyus">Why Us</a></p>
          <p><a href="/prospects">Prospects</a></p>
          <p><a href="/features">Features</a></p>
          <p><a href="/contactus">Contact Us</a></p>
        </div>
      </div>
      <div className="mediaNavbar-sign">
       <span >
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
          <p><a href="/whyus">Why Us</a></p>
          <p><a href="/prospects">Prospects</a></p>
          <p><a href="/features">Features</a></p>
          <p><a href="/contactus">Contact Us</a></p>
          </div>
          <div className="mediaNavbar-menu_container-links-sign">
          </div>
        </div>
        )}
      </div>
    </div>      
    </>
  )
}
