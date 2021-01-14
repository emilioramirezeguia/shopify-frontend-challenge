import React from "react";
import { connect } from "react-redux";
import { addNomination } from "../actions/actions";
import "../sass/SearchResults.scss";

// returns true if movie already nominated by user
const checkIfNominated = (object1, object2) => {
  const keys1 = Object.keys(object1);

  for (let key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};

function SearchResults(props) {
  return (
    <div className="resultsContainer">
      {props.error && <h3>{props.error}</h3>}
      {props.movies.length > 0 && (
        <>
          <h3>Results...</h3>
          <ul>
            {props.movies.map((movie, index) => {
              return (
                <li key={index}>
                  {movie.Title} ({movie.Year})
                  {/* button disabled if movie already nominated */}
                  <button
                    disabled={props.nominations.some((nomination) =>
                      checkIfNominated(nomination, movie)
                    )}
                    onClick={() => props.addNomination(movie)}
                  >
                    Nominate
                  </button>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    nominations: state.nominations,
    error: state.error,
  };
};

export default connect(mapStateToProps, { addNomination })(SearchResults);
