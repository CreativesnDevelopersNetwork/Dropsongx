import "./droptools.css";
import OffersData from "./dropToolsData";
import offImg1 from "../../assets/covers/offer1.jpg";
import offImg2 from "../../assets/covers/offer2.jpg";
import offImg3 from "../../assets/covers/offer3.jpg";
import offImg4 from "../../assets/covers/offer4.jpg";
import offImg5 from "../../assets/djSide/images/music photos/music1.jpg";
import offImg6 from "../../assets/djSide/images/music photos/music2.jpg";


function WeOffer(){
    return(
        <div className="offers">
            <span className="offerInfo">
            <h1><i className="capitalD">D</i>ropSong Tools<i>!</i></h1>
            <p>Partner with our leading digital marketing agency to increase brand awareness</p>
            </span>
            <div className="offerCard">
                <OffersData
                image={offImg1}
                heading="Detailed Analytics"
                description=" Dive into the heart of your music's performance with access to in-depth analytics and comprehensive reporting, empowering you to make informed decisions."
                />
                <OffersData
                image={offImg2}
                heading="User-Friendly Interface"
                description="Manage your music and monitor performance effortlessly with our intuitive, user-friendly dashboard. Streamline your music distribution journey with ease."
                />
                <OffersData
                image={offImg3}
                heading="Support for Cover Songs"
                description="Legally distribute your cover songs with confidence. Our service provides the necessary support to ensure your cover songs meet all legal requirements."
                />
                           
            </div>
            <div className="offerCard">
               
                <OffersData
                image={offImg4}
                heading="Customization"
                description="Tailor your artist profile and branding to reflect your unique style. Leave a lasting impression and engage your audience with a personalized touch."
                />                
                <OffersData
                image={offImg5}
                heading="Events and BTL activations"
                description="Deliver a sensory experience using tactical activities that will appeal to your audiences emotions and drive action."
                />
                <OffersData
                image={offImg6}
                heading="Digital Marketing Campaigns"
                description="Optimise your online using all types of digital media not limited to websites, banners and search engine"
                />
               
            </div>
        </div>
    )
}

export default WeOffer;