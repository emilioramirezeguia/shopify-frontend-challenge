import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Nominations from "./components/Nominations";
import "./App.scss";

function App() {
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
    </div>
  );
}

export default App;
