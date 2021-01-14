import {
  FETCHING_MOVIES,
  FETCHING_MOVIES_SUCCESS,
  FETCHING_MOVIES_FAILURE,
  ADD_NOMINATION,
  REMOVE_NOMINATION,
} from "../actions/actions";

const initialState = {
  isLoading: false,
  display: false,
  movies: [],
  nominations: [],
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_MOVIES:
      return {
        ...state,
        isLoading: true,
      };
    case FETCHING_MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        display: true,
        movies: action.payload,
        error: "",
      };
    case FETCHING_MOVIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        movies: [],
        error: action.payload,
      };
    case ADD_NOMINATION:
      return {
        ...state,
        nominations: [...state.nominations, action.payload],
      };
    case REMOVE_NOMINATION:
      return {
        ...state,
        nominations: state.nominations.filter(
          (nomination) => nomination.imdbID !== action.payload
        ),
      };
    default:
      return state;
  }
};
