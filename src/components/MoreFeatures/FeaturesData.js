import { Component } from "react";
import "./section.css";



class FeaturesData extends Component{
    render(){
        return(
            <div className={this.props.className}>
                <div className="featText">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.description}</p>
                    <a href="/" className="featBtn">{this.props.button}</a>
                </div>
                <div className="featImage">
                     <img alt="featureimg" src={this.props.image1} />
                     <img alt="featureimg" src={this.props.image2} />
                </div>
            </div>
            
           
        )
    }
}

export default FeaturesData;

