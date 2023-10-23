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
                heading="Brand Identity"
                description="Make your Brand recognisable, differentiated and appealing to the target audience with styles to tone your voice."
                />
                <OffersData
                image={offImg2}
                heading="Personal Branding"
                description="Build yourself and reflect your values to attract the right responses from your audience."
                />
                <OffersData
                image={offImg3}
                heading="Media Buy"
                description="Reach your audience in the right places at the right frequency at the right price. From Traditional media to digital media or an integrated mix."
                />
                           
            </div>
            <div className="offerCard">
               
                <OffersData
                image={offImg4}
                heading="General Marketing Support"
                description="Outsource all your marketing challenges and pains to us to assist you with, From Brand, Customer value management to customer response management."
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