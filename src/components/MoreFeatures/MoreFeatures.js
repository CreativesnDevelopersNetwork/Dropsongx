import featImg1 from "../../assets/djSide/images/music photos/musicAlt1.jpg";
import featImg2 from "../../assets/djSide/images/music photos/music8.jpg";
import featImg3 from "../../assets/djSide/images/music photos/music3.jpg";
import featImg4 from "../../assets/djSide/images/music photos/music4.jpg";
import featImg5 from "../../assets/covers/pot1.jpg";
import featImg6 from "../../assets/covers/pot2.jpg";
import featImg7 from "../../assets/covers/closeup-dj-working-blue-light.jpg";
import featImg8 from "../../assets/covers/dj-spinning-mixing-scratching-track-controls-dj-s-deck-strobe-dj-music-club-life-concept.jpg";
import "./section.css";
import FeaturesData from "./FeaturesData";

const MoreFeatures = () => {
    return (
        <div className="mainSection">
            <h1>Our Main Features</h1>
            <p>Unlock the full potential of your music with our comprehensive music distribution platform</p>
           
            <FeaturesData
            className="firstFeature"
            heading="Wide Distribution Reach"
            description="Gain access to an expansive network of major streaming platforms and online music stores, ensuring that your music is heard by a global audience. Expand your reach like never before."
            button="Get Access"
            image1={featImg1}
            image2={featImg2}
            /><hr/>

            <FeaturesData
            className="secondFeature"
            heading="Multiple Release Types:"
            description="Whether it's a single, an album, an EP, or any other musical creation, our service accommodates all release types, giving you the freedom to share your art in any form."
            button="Learn More"
            image1={featImg4}
            image2={featImg3}
            /><hr/>

             <FeaturesData
            className="firstFeature"
            heading="Custom Release Dates"
            description="Take control of your release schedule with the flexibility to choose release dates and offer pre-order options. Your music, your timeline."
            button="Contact Us"
            image1={featImg5}
            image2={featImg6}
            /><hr/>

            <FeaturesData
            className="secondFeature"
            heading="Marketing Tools"
            description="Supercharge your music's exposure with our suite of promotion and marketing tools, including social media integration and email campaigns. Elevate your marketing strategy to new heights."
            button="Learn More"
            image1={featImg7}
            image2={featImg8}
            /><hr/>
        </div>
    )
}


export default MoreFeatures;