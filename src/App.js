import { connect } from "react-redux";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Nominations from "./components/Nominations";
import "./App.scss";

function App(props) {
  return (
    <div className="container">
      <nav className="navbar">
        <ul>
          <li>The Shoppies</li>
        </ul>
      </nav>
      <SearchBar />
      <SearchResults />
      <Nominations />
      {props.nominations.length === 5 ? (
        <div className="banner">Thank you for nominating 5 movies!</div>
      ) : null}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    nominations: state.nominations,
  };
};

export default connect(mapStateToProps, {})(App);
