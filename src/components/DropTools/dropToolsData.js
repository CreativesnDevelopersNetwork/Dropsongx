import "./droptools.css";


function OffersData(props){
    return(
        <div className="dataCard">
            <div className="offerImage">
                <img src={props.image} alt="offerImg" />
            </div>
            <h4>{props.heading}</h4>
            <p>{props.description}</p>
        </div>
    )
}

export default OffersData;