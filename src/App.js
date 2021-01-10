import SearchBar from "./components/SearchBar";
import "./App.scss";

function App() {
  return (
    <div className="container">
      <nav className="navbar">
        <ul>
          <li>The Shoppies</li>
        </ul>
      </nav>
      <div className="search-container">
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
