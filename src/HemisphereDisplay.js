import React from "react";
import "./Hemisphere.css";
import northernPic from "./image/NorthernHemisphere.jpg";
import southernPic from "./image/SouthernHemisphere.jpg";

const himesphereConfig = {
  Northern: {
    text: "it is northern hemishere",
    picture: northernPic,
  },
  Southern: {
    text: "it is southern hemishere",
    picture: southernPic,
  },
};
const HemisphereDisplay = ({ latitude }) => {
  const hemisphere = latitude > 0 ? "Northern" : "Southern";
  const { text, picture } = himesphereConfig[hemisphere];

  return (
    <div className={hemisphere}>
      <div className="ui raised text container segment">
        <div className="image">
          <img src={picture} alt="hemisphere pic" />
        </div>
        <div className="ui teal bottom attached label">
          <h1>{text} </h1>
        </div>
      </div>
    </div>
  );
};

export default HemisphereDisplay;
