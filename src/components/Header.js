import React, { useState } from "react";

const Header = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <header>
      <h1>Vegeterian Recipes</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for recipes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </header>    
  );
};

export default Header;