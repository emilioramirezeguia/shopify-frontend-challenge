import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
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
    </div>
  );
}

export default App;
