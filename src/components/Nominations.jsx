import React from "react";
import { connect } from "react-redux";
import { removeNomination } from "../actions/actions";
import "../sass/Nominations.scss";

function Nomations(props) {
  return (
    <div>
      <div className="nominationsContainer">
        <h3>Nominations</h3>
        <ul>
          {props.nominations &&
            props.nominations.map((nomination, index) => {
              return (
                <li key={index}>
                  {nomination.Title} ({nomination.Year}){" "}
                  <button
                    onClick={() => props.removeNomination(nomination.imdbID)}
                  >
                    Remove
                  </button>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    nominations: state.nominations,
  };
};

export default connect(mapStateToProps, { removeNomination })(Nomations);
