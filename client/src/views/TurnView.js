import React, { useState } from "react";
import "./TurnView.css";

function TurnView(props) {
  let move = props.move;
  const path = move ? `http://localhost:5000/skateVidz/${move.video}` : "";

  return (
    <div className="TurnView">
      <h1>Turns</h1>
      <h2>Today you will learn with ... Megan!</h2>
      <img
        className="Megan"
        src="https://media-exp1.licdn.com/dms/image/C4D03AQHqlxnSUCH8sA/profile-displayphoto-shrink_200_200/0/1648118375869?e=1669852800&v=beta&t=OwyftTjxFsaucnNiPmY_AAcHQ4mbT4KNj_1ApW3HtyI"
      ></img>

      <h3 className="levels">Levels:</h3>

      <div className="row text-center">
        <div className="col-sm-6 col-md-4">
          <h3>Beginner</h3>
          <button onClick={(e) => props.showSkateMove(4)}>Click Here</button>
        </div>

        <div className="col-sm-6 col-md-4">
          <h3>Intermediate</h3>
          <button onClick={(e) => props.showSkateMove(5)}>Click Here</button>
        </div>

        <div className="col-sm-6 col-md-4">
          <h3>Advanced</h3>
          <button onClick={(e) => props.showSkateMove(6)}>Click Here</button>
        </div>
      </div>
      <hr></hr>
      <div className="data">
        {move && (
          <h4>
            {" "}
            {move.level} {move.name}
            <br></br>
            <br></br>
            <hr></hr>
            {move.description}
          </h4>
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
