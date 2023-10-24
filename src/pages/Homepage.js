import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Hero from "../components/Hero/Hero"
import Footer from "../components/Footer/Footer"
import AddFarmer from "../components/AddFarmer/AddFarmer"
import HomeNav from "../components/HomeNav/HomeNav";
import coverVid from "../assets/cover1.mp4"
import MoreFeatures from "../components/MoreFeatures/MoreFeatures";
import Features from "../components/Features/Features";
import WeOffer from "../components/DropTools/DropTools";


export default function Homepage() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
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

  const [toggleMenu, setToggleMenu] = useState(false);

  // Check if the user is not authenticated
  if (!currentUser) {
    return (
      <>
    <HomeNav/>
    <Hero 
        className="homeHero"
        textClass="heroText"
        videoSource={coverVid}
        title="DISTRIBUTE AND PROMOTE YOUR MUSIC TO OVER 350 DJ’S ACROSS AFRICA"
        text="Discover innovative ways to build your audience at any stage.."
        btnText="Get Access"
        joinBtnText="Join as Artist(e)"
        btnClass="homeBtn"
        joinBtnClass="joinBtn"
        url="/login"
        joinUrl="/"
      />
      <Features/>
      <MoreFeatures/>
      <WeOffer/>
        <Footer />
      </>
    );
  }

  // If user is authenticated, display the Homepage content
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
        <Button className="signIn" onClick={handleLogout}>
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
          <p><a href="/whyus">Why Us</a></p>
          <p><a href="/prospects">Prospects</a></p>
          <p><a href="/features">Features</a></p>
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
    {/* profile card */}
     <div className="cardBox">
     <Card className="profileCard">
        <div>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </div>
      </Card>
     </div>
     {/* add farmer */}
     <AddFarmer />
     {/*  */}
    </>
  );
}
