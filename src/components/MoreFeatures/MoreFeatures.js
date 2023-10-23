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
            <p>Integrating brand strategies with digital initiatives to improve consumer experiences across touchpoints</p>
           
            <FeaturesData
            className="firstFeature"
            heading="Creating Unique Brand Identity"
            description="Crafting a unique brand identity is an essential undertaking for any business or organization. It goes beyond merely having a recognizable logo or catchy tagline; it encompasses the core values, personality, and promise that set a brand apart from its competitors.

            To create a unique brand identity, one must delve into understanding the target audience and their desires, needs, and aspirations. This knowledge serves as the foundation upon which the brand's identity is built. By aligning the brand's values with those of the target audience, a deep emotional connection can be forged, fostering loyalty and advocacy.

            Consistency is key"
            button="Request a Proposal"
            image1={featImg1}
            image2={featImg2}
            /><hr/>

            <FeaturesData
            className="secondFeature"
            heading="Audience Engagement"
            description="Experience the essence of effective communication and connection in various contexts, whether it be business, education, or entertainment. When we engage with our audience, we actively involve and interact with them, fostering a deeper connection and creating a more meaningful experience"
            button="Learn More"
            image1={featImg4}
            image2={featImg3}
            /><hr/>

             <FeaturesData
            className="firstFeature"
            heading="Customer Loyalty"
            description="We recognize that each customer is unique. Through personalized interactions, customized offerings, and targeted communications, we strive to create tailored experiences that resonate with our customers, fostering deeper connections and loyalty. Our dedicated customer support team is available to assist customers promptly and effectively. We value their time and aim to resolve any issues or concerns they may have, reinforcing their loyalty by providing exceptional service."
            button="Contact Us"
            image1={featImg5}
            image2={featImg6}
            /><hr/>

            <FeaturesData
            className="secondFeature"
            heading="Generate Qualified Leads"
            description="Partner with a leading digital marketing agency to increase brand awareness, reach your target audience & grow your business online. Our focus on customer loyalty aims to cultivate a positive experience for every customer, ensuring their satisfaction remains at the forefront of our business approach. We believe in fostering strong, long-term relationships with our customers. By prioritizing their needs, addressing concerns, and consistently delivering value, we create a foundation of trust and loyalty."
            button="Learn More"
            image1={featImg7}
            image2={featImg8}
            /><hr/>
        </div>
    )
}


export default MoreFeatures;