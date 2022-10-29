import React from "react";

function LeveledMoves(props) {
  let m = props.skateMoves;

  return (
    <div className="LeveledMoves">
      <h1>Stops</h1>
      <h2>Today you will learn with Megan!</h2>
      <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHqlxnSUCH8sA/profile-displayphoto-shrink_200_200/0/1648118375869?e=1669852800&v=beta&t=OwyftTjxFsaucnNiPmY_AAcHQ4mbT4KNj_1ApW3HtyI"></img>

      <h2>Levels:</h2>
      {/* cols are 100% of display width for 'xs', 50% width for 'sm', 33% width for 'md' and larger */}

      <div className="row text-center">
        <div className="col-sm-6 col-md-4">
          <h3>Beginner</h3>
          <button onClick={(m) => props.specMove(m.id)}>{m.level}</button>
        </div>

        <div className="col-sm-6 col-md-4">
          <h3>Intermediate</h3>
          <button>I am A button</button>
        </div>

        <div className="col-sm-6 col-md-4">
          <h3>Advanced</h3>
          <button>I am A button</button>
        </div>
      </div>

      <div>
        <ul>
          <li>
            {m.name} {m.level} {m.category} {m.video}
          </li>
        </ul>
      </div>
    </div>
  );
}
export default LeveledMoves;
