import React from "react";
import Bbq from "../assets/bbq.jpg";
import Cabin from "../assets/cabin.jpg";
import Hike from "../assets/hike.jpg";
import Horse from "../assets/horse-riding.jpg";
import Sunset from "../assets/sunset-volleybal.jpg";
import Waterfall from "../assets/waterfall.jpg";
import "./Hero.css";

export default function () {
  return (
    <div className="hero-container">
      <div className="hero--images">
        <div className="hero--imagebox">
          <img className="hero--img" alt="bbq" src={Bbq} />
          <img className="hero--img" alt="cabin" src={Cabin} />
        </div>
        <div className="hero--imagebox">
          <img className="hero--img" alt="hiking" src={Hike} />
          <img className="hero--img" alt="horse riding" src={Horse} />
        </div>
        <div className="hero--imagebox">
          <img className="hero--img" alt="waterfall" src={Waterfall} />
        </div>
        <div className="hero--imagebox">
          <img className="hero--img" alt="sunset" src={Sunset} />
        </div>
      </div>
      <div className="hero--text">
        <h1>Online Experiences</h1>
        <p>
          Sollicitudin aliquam ultrices sagittis orci, a scelerisque purus
          semper eget duis at tellus at urna condimentum mattis.
        </p>
      </div>
    </div>
  );
}
