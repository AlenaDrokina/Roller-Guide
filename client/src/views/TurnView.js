import React, { useState } from "react";

function TurnView(props) {
  let move = props.move;
  const path = move ? `http://localhost:5000/skateVidz/${move.video}` : "";

  return (
    <div className="TurnView">
      <h1>Turns</h1>
      <h2>Today you will learn with Megan!</h2>
      <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHqlxnSUCH8sA/profile-displayphoto-shrink_200_200/0/1648118375869?e=1669852800&v=beta&t=OwyftTjxFsaucnNiPmY_AAcHQ4mbT4KNj_1ApW3HtyI"></img>

      <h2>Levels:</h2>
      {/* cols are 100% of display width for 'xs', 50% width for 'sm', 33% width for 'md' and larger */}
      <div className="row text-center">
        <div className="col-sm-6 col-md-4">
          <h3>Beginner</h3>
          <button onClick={(e) => props.showSkateMove(4)}>Beginner</button>
        </div>

        <div className="col-sm-6 col-md-4">
          <h3>Intermediate</h3>
          <button onClick={(e) => props.showSkateMove(5)}>Intermediate</button>
        </div>

        <div className="col-sm-6 col-md-4">
          <h3>Advanced</h3>
          <button onClick={(e) => props.showSkateMove(6)}>Advanced</button>
        </div>
      </div>
      <div>
        {move && (
          <p>
            {move.name} {move.description}
          </p>
        )}

        {move && (
          <video
            src={path}
            width="600"
            height="300"
            controls="controls"
            autoPlay={true}
          />
        )}
      </div>
    </div>
  );
}

export default TurnView;
