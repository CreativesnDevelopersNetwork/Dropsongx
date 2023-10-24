import React from "react";
import { useAuth } from "../contexts/AuthContext";
import Hero from "../components/Hero/Hero"
import Footer from "../components/Footer/Footer"
import HomeNav from "../components/HomeNav/HomeNav";
import coverVid from "../assets/cover1.mp4"
import MoreFeatures from "../components/MoreFeatures/MoreFeatures";
import Features from "../components/Features/Features";
import WeOffer from "../components/DropTools/DropTools";
import MainNav from "../components/MainNav/MainNav";
import MiniNav from "../components/MainNav/MiniNav";


export default function Homepage() {
  const { currentUser } = useAuth();
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
     <MainNav/>
     <MiniNav/>     
     <WeOffer/>
     <Footer/>
    </>
  );
}
