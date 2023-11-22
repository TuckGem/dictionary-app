import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>
          <a
            className="gitLink"
            href="https://github.com/catarinadarosaria/world-clock"
            target="_blank"
            rel="noreferrer"
          >
            Open-source
          </a>{" "}
          code by{" "}
          <a
            className="myWebsite"
            href="https://catarinarosaria.com/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Catarina da Rosária
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
