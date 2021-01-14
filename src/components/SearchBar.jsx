import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchMovies } from "../actions/actions";

function SearchBar(props) {
  const [searchTerms, setSearchTerms] = useState("");

  const handleChanges = (event) => {
    setSearchTerms(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.fetchMovies(searchTerms);
    setSearchTerms("");
  };

  return (
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
  );
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
  };
};

export default connect(mapStateToProps, { fetchMovies })(SearchBar);
