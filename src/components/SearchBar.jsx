import React, { useState } from "react";
import "../sass/SearchBar.scss";

function SearchBar() {
  const [movie, setMovie] = useState("");

  const handleChanges = (event) => {
    setMovie(event.target.value);
  };
  return (
    <div className="barContainer">
      <form>
        <label>Movie title</label>
        <input
          type="text"
          name="movie"
          placeholder="What's your favorite movie?"
          value={movie}
          onChange={handleChanges}
        />
      </form>
    </div>
  );
}

export default SearchBar;
