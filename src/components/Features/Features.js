import "./features.css";
import amazon from "../../assets/brands/amazon.png";
import apple from "../../assets/brands/apple.png";
import deezer from "../../assets/brands/deezer.png";
import pandora from "../../assets/brands/pandora.png";
import shazam from "../../assets/brands/shazam.png";
import spotify from "../../assets/brands/spotify.png";
import tidal from "../../assets/brands/tidal.png";
import tiktok from "../../assets/brands/tiktok.png";
import bugs from "../../assets/brands/more/bugs.png";
import audible from "../../assets/brands/more/audible.png";
import dmusic from "../../assets/brands/more/dmusic.png";
import broadtime from "../../assets/brands/more/broadtime.png";
import jpay from "../../assets/brands/more/jpay.png";
import genie from "../../assets/brands/more/genie.png";
import lola from "../../assets/brands/more/lola.png";
import movista from "../../assets/brands/more/movista.png";



const Features = () => {
    return(
        <section className="featureSection">
      <h1 className="featureHeading">
      <b>Your gateway to:</b>
    </h1>
    <div id="feature" className="feature section-p1">
      <div className="featureBox">
        <img src={amazon} alt="" />
        
      </div>
      <div className="featureBox">
        <img src={apple} alt="" />
        
      </div>
      <div className="featureBox">
        <img src={deezer} alt="" />
        
      </div>
      <div className="featureBox">
        <img src={pandora} alt="" />
        
      </div>
      <div className="featureBox">
        <img src={shazam} alt="" />
        
      </div>

      <div className="featureBox">
        <img src={spotify} alt="" />
       
      </div>

      <div className="featureBox">
        <img src={tidal} alt="" />
        
      </div>

      <div className="featureBox">
        <img src={tiktok} alt="" />
       
      </div>          
    </div>
    <div id="feature" className="feature section-p1">
    <div className="featureBox">
        <img src={bugs} alt="" />
        
      </div>
      <div className="featureBox">
        <img src={lola} alt="" />
        
      </div>
      <div className="featureBox">
        <img src={jpay} alt="" />
        
      </div> 
      <div className="featureBox">
        <img src={movista} alt="" />
        
      </div>
      <div className="featureBox">
        <img src={dmusic} alt="" />
        
      </div>
      <div className="featureBox">
        <img src={audible} alt="" />
        
      </div>
      <div className="featureBox">
        <img src={genie} alt="" />
        
      </div>
      <div className="featureBox">
        <img src={broadtime} alt="" />
        
      </div>
    </div>
    <a className="navLink" href="./sellMusic.html">
      <button className="showMoreButton">
        <span>Show More ++</span>
      </button>
    </a> 

    </section>
    )
}


export default Features;