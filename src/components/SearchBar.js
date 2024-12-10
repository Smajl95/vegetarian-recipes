import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  // Gestore per il tasto Enter
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch(); // Esegui la ricerca se si preme Enter
    }
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-bar-input"
        placeholder="Search for a recipe..."
        value={query}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress} // Aggiungi l'evento per "Enter"
      />
      <button className="search-bar-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
