import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);
  const [photos, setPhotos] = useState(null);

  function showDefinition(response) {
    setResults(response.data);
  }
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleResponse(event) {
    event.preventDefault();

    let apiKey = "84d76171da4e217dad7t0o3ca0d5af7b";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(showDefinition);

    let imagesApiKey = "84d76171da4e217dad7t0o3ca0d5af7b";
    let imagesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imagesApiKey}`;

    axios.get(imagesApiUrl).then(handlePexelsResponse);
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
            placeholder="Enter a word..."
            autoFocus={true}
            onChange={handleKeywordChange}
          />
        </form>
        <small className="hint">i.e. paris, wine, yoga, coding</small>
      </section>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
