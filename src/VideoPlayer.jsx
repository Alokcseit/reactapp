import React from "react";
import "./Animal"; // Create this CSS file with the styles to set video container dimensions
import "./Animal.css";
const VideoPlayer = ({ videoSrc }) => {
  return (
    <div className="video-container">
      <video autoPlay loop muted>
        <source src={videoSrc} type="video/mp4" />
        {/* Add more source elements for different video formats if needed */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
