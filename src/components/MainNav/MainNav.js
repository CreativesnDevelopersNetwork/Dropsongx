import "./nav.css";
import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Button } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/dropsongs.jpg"
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';


const MainNav = () => {  
    const [toggleMenu, setToggleMenu] = useState(false);
    const { currentUser, logout } = useAuth();
    const [error, setError] = useState("");
    const navigate = useNavigate();
    async function handleLogout() {
      setError("");
  
      try {
        await logout();
        navigate.push("/login");
      } catch {
        setError("Failed to log out");
      }
    }
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
         <MDBDropdown group className='shadow-0'>
        <MDBDropdownToggle color='link'>Action</MDBDropdownToggle>
        <MDBDropdownMenu>
          <MDBDropdownItem link>Action</MDBDropdownItem>
          <MDBDropdownItem link>Another action</MDBDropdownItem>
          <MDBDropdownItem link>Something else here</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
         <strong>Email:</strong> {currentUser.email}
         <Button onClick={handleLogout}>
            Log Out
          </Button>
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
             <Button onClick={handleLogout}>
             Log Out
            </Button>
            </div>
          </div>
          )}
        </div>
      </div>
    )
}


export default MainNav;