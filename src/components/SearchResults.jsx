import React from "react";
import "../sass/SearchResults.scss";

function SearchResults(props) {
  const movies = props.movies;

  return (
    <div className="resultsContainer">
      {movies.Response ? <h3>{movies.Error}</h3> : <h3>Results...</h3>}
      <ul>
        {movies.Search &&
          movies.Search.map((movie, index) => {
            return (
              <li key={index}>
                {movie.Title} ({movie.Year}) <button>Nominate</button>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default SearchResults;
