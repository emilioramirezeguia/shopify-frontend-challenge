import axios from "axios";

// action types
export const FETCHING_MOVIES = "FETCHING_MOVIES";
export const FETCHING_MOVIES_SUCCESS = "FETCHING_MOVIES_SUCCESS";
export const FETCHING_MOVIES_FAILURE = "FETCHING_MOVIES_FAILURE";
export const ADD_NOMINATION = "ADD_NOMINATION";
export const REMOVE_NOMINATION = "REMOVE_NOMINATION";

// action creators
export const fetchMovies = (movie) => {
  return (dispatch) => {
    dispatch({ type: FETCHING_MOVIES });
    axios
      .get(
        `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&type=movie&s=${movie})`
      )
      .then((response) => {
        if (response.data.Response === "True") {
          dispatch({
            type: FETCHING_MOVIES_SUCCESS,
            payload: response.data.Search,
          });
        } else {
          dispatch({
            type: FETCHING_MOVIES_FAILURE,
            payload: response.data.Error,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const addNomination = (nomination) => {
  return { type: ADD_NOMINATION, payload: nomination };
};

export const removeNomination = (id) => {
  return { type: REMOVE_NOMINATION, payload: id };
};
