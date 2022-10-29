import React from "react";
import manuelTransition from "/Users/meganwalsh/Desktop/CodeOp_Activities/MVP/my-express-app/client/src/skateVidz/manuelTransition.mp4";
function VideoView() {
  return (
    <div className="VideoView">
      <h2>Video Tutorial</h2>
      <p> click to watch your Tutorial</p>
      {/* <video className="embed-responsive embed-resonsive-16by9" controls>
        <source
          className="embed-responsive-item"
          src={manuelTransition}
          type="video/mp4"
        />
      </video> */}
      <video
        src={manuelTransition}
        width="600"
        height="300"
        controls="controls"
        autoplay="true"
      />
    </div>
  );
}
export default VideoView;
