import React from "react";
import "./hero.css";

function Hero(props) {
  return (
    <>
      <div className={props.className}>
        <video autoPlay loop muted playsInline>
          <source src={props.videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className={props.textClass}>
        <h2 className="subHeading">
              <span className="capitalD"><i>D</i></span><i>ROPSONGX</i> TOOLS
            </h2>
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass}>
            {props.btnText}
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;