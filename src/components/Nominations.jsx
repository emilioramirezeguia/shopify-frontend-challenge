import React from "react";
import "../sass/Nominations.scss";

function Nomations(props) {
  const nominations = props.nominations;

  return (
    <div>
      <div className="nominationsContainer">
        <h3>Nominations</h3>
        <ul>
          {nominations &&
            nominations.map((nomination, index) => {
              return (
                <li key={index}>
                  {nomination.Title} ({nomination.Year}) <button>Remove</button>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default Nomations;
