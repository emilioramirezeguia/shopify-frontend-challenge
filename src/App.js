import { connect } from "react-redux";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Nominations from "./components/Nominations";

function App(props) {
  return (
    <>
      {props.nominations.length === 5 ? (
        <div className="banner">Thank you for nominating 5 movies!</div>
      ) : null}
      <div className="container">
        <nav>
          <ul>
            <li>The Shoppies</li>
          </ul>
        </nav>
        <SearchBar />
        {props.display && (
          <div className="resultsNominations">
            <SearchResults />
            <Nominations />
          </div>
        )}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    display: state.display,
    nominations: state.nominations,
  };
};

export default connect(mapStateToProps, {})(App);
