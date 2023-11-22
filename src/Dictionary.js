import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);

  function showDefinition(response) {
    setResults(response.data);
  }

  function handleResponse(event) {
    event.preventDefault();

    let apiKey = "84d76171da4e217dad7t0o3ca0d5af7b";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(showDefinition);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={handleResponse}>
          <label>What word do you want to look up?</label>
          <input
            className="search-input"
            type="search"
            autoFocus={true}
            onChange={handleKeywordChange}
          />
        </form>
        <small class="hint">i.e. paris, wine, yoga, coding</small>
      </section>
      <Results results={results} />
    </div>
  );
}
