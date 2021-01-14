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
      <SearchBar />
    </div>
  );
}

export default App;
