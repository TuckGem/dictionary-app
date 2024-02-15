import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="dictionary-title">Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="book" />
        </main>
   
      </div>
    </div>
  );
}

export default App;
