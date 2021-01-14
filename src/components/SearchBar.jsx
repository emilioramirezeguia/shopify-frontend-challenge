import axios from "axios";
import React, { useState } from "react";
import SearchResults from "./SearchResults";
import "../sass/SearchBar.scss";

function SearchBar() {
  const [searchTerms, setSearchTerms] = useState("");
  const [movies, setMovies] = useState("");

  const handleChanges = (event) => {
    setSearchTerms(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .get(
        `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&type=movie&s=${searchTerms}`
      )
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    setSearchTerms("");
  };

  return (
    <div>
      <div className="barContainer" onSubmit={handleSubmit}>
        <form>
          <label>Movie title</label>
          <input
            type="text"
            name="movie"
            placeholder="What's your favorite movie?"
            value={searchTerms}
            onChange={handleChanges}
          />
        </form>
      </div>
      {movies && <SearchResults movies={movies} />}
    </div>
  );
}

export default SearchBar;
