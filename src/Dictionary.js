import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(event) {
    event.preventDefault();
    alert(`Searching for the word ${keyword}`);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={handleResponse}>
        <input type="search" autoFocus={true} onChange={handleKeywordChange} />
      </form>
    </div>
  );
}
