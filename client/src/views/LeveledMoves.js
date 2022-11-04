import React, { useState } from "react";
import "./LeveledMoves.css";

function LeveledMoves(props) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  let move = props.move;
  const path = move ? `http://localhost:5000/skateVidz/${move.video}` : "";

  const onChange = (e) => {
    setComment(e.target.value);
  };
  const onClickHandler = () => {
    setComments((comments) => [...comments, comment]);
  };
  return (
    <div className="LeveledMoves">
      <h1>Stops</h1>
      <h2>Today you will learn with ... Megan!</h2>
      <img
        className="Megan"
        src="https://media-exp1.licdn.com/dms/image/C4D03AQHqlxnSUCH8sA/profile-displayphoto-shrink_200_200/0/1648118375869?e=1669852800&v=beta&t=OwyftTjxFsaucnNiPmY_AAcHQ4mbT4KNj_1ApW3HtyI"
      ></img>
      <hr></hr>
      <br></br>
      <h3 className="levels">Levels:</h3>
      <br></br>
      {/* cols are 100% of display width for 'xs', 50% width for 'sm', 33% width for 'md' and larger */}
      <div className="row text-center">
        <div className="col-sm-6 col-md-4">
          <h3>Beginner</h3> <br></br>
          {/* <button onClick={(m) => props.specMove(m.id)}>{m.level}</button> */}
          <button className="button" onClick={(e) => props.showSkateMove(1)}>
            Click Here
          </button>
        </div>

        <div className="col-sm-6 col-md-4">
          <h3>Intermediate</h3>
          <br></br>
          <button className="button" onClick={(e) => props.showSkateMove(2)}>
            Click Here
          </button>
        </div>

        <div className="col-sm-6 col-md-4">
          <h3>Advanced</h3>
          <br></br>
          {/* <button>I am A button</button> */}
          <button className="button" onClick={(e) => props.showSkateMove(3)}>
            Click Here
          </button>
        </div>
      </div>
      <hr></hr>
      <div className="data">
        {move && (
          <h4>
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
            width="800"
            height="500"
            controls="controls"
            autoPlay={true}
          />
        )}
        {move && (
          <div className="main-container">
            <h3 className="comment-text">Comment</h3>
            <textarea
              value={comment}
              onChange={onChange}
              className="input-box"
              placeholder="Leave a comment here!"
            />
            <button onClick={onClickHandler} className="comment-button">
              Submit
            </button>
            {comments.map((text) => (
              <div key={text.id}>
                <div className="comment-container">{text}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default LeveledMoves;
