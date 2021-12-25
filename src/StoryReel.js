import React from "react";
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
    return (
        <div className="storyReel">
          <Story 
            image = "images/image9.jpg"
            profileSrc = "images/image4.jpg"
            title = "Slavi Slavov"
          />
            <Story 
            image = "images/image7.jpg"
            profileSrc = "images/image2.jpg"
            title = "Slavi Slavov"
          />
            <Story 
            image = "images/image10.jpg"
            profileSrc = "images/image3.jpg"
            title = "Slavi Slavov"
          />
            <Story 
            image = "images/image8.jpg"
            profileSrc = "images/image5.jpg"
            title = "Slavi Slavov"
          />
            <Story 
            image = "images/image9.jpg"
            profileSrc = "images/image6.jpg"
            title = "Slavi Slavov"
          />
        </div>
    )
}

export default StoryReel;