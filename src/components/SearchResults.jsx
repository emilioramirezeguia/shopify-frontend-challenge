import React, { useState } from "react";
import Nominations from "./Nominations";
import "../sass/SearchResults.scss";

function SearchResults(props) {
  const movies = props.movies;
  const [nominations, setNominations] = useState([]);
  const saveNomination = (movie) => {
    setNominations([...nominations, movie]);
  };

  return (
    <div>
      <div className="resultsContainer">
        {movies.Response === "True" ? (
          <h3>Results...</h3>
        ) : (
          <h3>{movies.Error}</h3>
        )}
        <ul>
          {movies.Search &&
            movies.Search.map((movie, index) => {
              return (
                <li key={index}>
                  {movie.Title} ({movie.Year}){" "}
                  <button onClick={() => saveNomination(movie)}>
                    Nominate
                  </button>
                </li>
              );
            })}
        </ul>
      </div>
      {nominations && <Nominations nominations={nominations} />}
    </div>
  );
}

export default SearchResults;
